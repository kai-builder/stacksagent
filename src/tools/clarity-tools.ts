import { z } from 'zod';
import { ClarityService } from '../services/clarity.js';
import { ContractGenerationOptions } from '../types/index.js';

export const clarityTools = (clarityService: ClarityService) => ({
  clarity_write_contract: {
    description:
      'Generates a new Clarity smart contract (.clar file) from natural language requirements. Supports common patterns like fungible tokens, NFTs, vaults, DAOs, and custom contracts. The generated contract will be saved to the contracts/ directory.',
    parameters: z.object({
      requirements: z
        .string()
        .describe(
          'Natural language description of what the contract should do. Examples: "Create a fungible token named MyToken with symbol MTK, 1000000 total supply and 6 decimals" or "Create an NFT collection called MyArt with symbol MART"'
        ),
      contractType: z
        .enum(['fungible-token', 'non-fungible-token', 'vault', 'dao', 'marketplace', 'custom'])
        .optional()
        .default('custom')
        .describe(
          'Type of contract to generate: fungible-token (SIP-010 token), non-fungible-token (SIP-009 NFT), vault (STX vault), dao (governance), marketplace (NFT marketplace), custom (minimal skeleton)'
        ),
      features: z
        .array(z.string())
        .optional()
        .describe(
          'Additional features to include (e.g., ["pausable", "mintable", "burnable"] for tokens)'
        ),
      includeTests: z
        .boolean()
        .optional()
        .default(false)
        .describe('Generate test cases alongside contract (future feature)'),
      includeComments: z
        .boolean()
        .optional()
        .default(true)
        .describe('Include detailed comments in generated code'),
    }),
    handler: async (args: {
      requirements: string;
      contractType?: 'fungible-token' | 'non-fungible-token' | 'vault' | 'dao' | 'marketplace' | 'custom';
      features?: string[];
      includeTests?: boolean;
      includeComments?: boolean;
    }) => {
      try {
        const options: ContractGenerationOptions = {
          contractType: args.contractType || 'custom',
          features: args.features,
          includeTests: args.includeTests,
          includeComments: args.includeComments ?? true,
        };

        const result = await clarityService.generateContract(args.requirements, options);

        return {
          success: true,
          contractName: result.name,
          contractCode: result.code,
          analysis: {
            syntaxValid: result.analysis?.syntaxValid,
            functionCount: result.analysis?.functions.length,
            dataVarCount: result.analysis?.dataVars.length,
            mapCount: result.analysis?.maps.length,
            complexity: result.analysis?.estimatedComplexity,
            traits: result.analysis?.traits,
            functions: result.analysis?.functions.map(f => ({
              name: f.name,
              type: f.type,
            })),
          },
          filePath: `contracts/${result.name}.clar`,
          message: `Contract '${result.name}' generated successfully. Review the code before deployment.`,
          nextSteps: [
            'Review the generated contract code carefully',
            'Run clarity_audit_contract to check for security issues',
            'Test the contract using Clarinet or similar tools',
            'Deploy to testnet for verification before mainnet',
          ],
        };
      } catch (error: any) {
        return {
          success: false,
          error: error.message,
        };
      }
    },
  },

  clarity_audit_contract: {
    description:
      'Performs a comprehensive security audit of a Clarity smart contract. Checks for vulnerabilities, best practices, and optimization opportunities. Returns a detailed report with security score (0-100) and actionable recommendations.',
    parameters: z.object({
      contractCode: z
        .string()
        .describe('The Clarity contract code to audit (full .clar file content as a string)'),
      includeOptimizations: z
        .boolean()
        .optional()
        .default(true)
        .describe('Include gas optimization suggestions in the report'),
      severityThreshold: z
        .enum(['critical', 'high', 'medium', 'low', 'informational'])
        .optional()
        .default('low')
        .describe('Minimum severity level to report (filters out issues below this threshold)'),
    }),
    handler: async (args: {
      contractCode: string;
      includeOptimizations?: boolean;
      severityThreshold?: 'critical' | 'high' | 'medium' | 'low' | 'informational';
    }) => {
      try {
        const report = await clarityService.auditContract(args.contractCode);

        // Filter issues by severity threshold
        const severityOrder = ['critical', 'high', 'medium', 'low', 'informational'];
        const thresholdIndex = severityOrder.indexOf(args.severityThreshold || 'low');

        const filteredSecurityIssues = report.securityIssues.filter(
          (issue) => severityOrder.indexOf(issue.severity) <= thresholdIndex
        );

        const filteredBestPractices = report.bestPracticeIssues.filter(
          (issue) => severityOrder.indexOf(issue.severity) <= thresholdIndex
        );

        // Determine status message
        let status: string;
        if (report.recommendation === 'approved') {
          status = 'Ready for deployment';
        } else if (report.recommendation === 'needs-review') {
          status = 'Review required before deployment';
        } else {
          status = 'CRITICAL: Do not deploy - security issues found';
        }

        return {
          success: true,
          contractName: report.contractName,
          auditDate: report.timestamp,
          summary: {
            totalIssues: report.summary.totalIssues,
            critical: report.summary.critical,
            high: report.summary.high,
            medium: report.summary.medium,
            low: report.summary.low,
            informational: report.summary.informational,
            score: report.score,
            recommendation: report.recommendation,
            status,
          },
          securityIssues: filteredSecurityIssues.map((issue) => ({
            severity: issue.severity,
            category: issue.category,
            title: issue.title,
            description: issue.description,
            location: issue.location,
            recommendation: issue.recommendation,
            cwe: issue.cwe,
          })),
          bestPractices: filteredBestPractices.map((issue) => ({
            severity: issue.severity,
            title: issue.title,
            description: issue.description,
            location: issue.location,
            recommendation: issue.recommendation,
          })),
          optimizations: args.includeOptimizations
            ? report.optimizationSuggestions.map((opt) => ({
                title: opt.title,
                description: opt.description,
                estimatedSavings: opt.estimatedGasSavings,
                location: opt.location,
              }))
            : [],
          message: `Audit completed. Score: ${report.score}/100. ${report.summary.totalIssues} issue(s) found.`,
          criticalActions:
            report.summary.critical > 0
              ? [
                  'DO NOT DEPLOY - Critical security vulnerabilities found',
                  'Review all critical issues immediately',
                  'Consider consulting a security expert',
                  'Re-audit after fixes are applied',
                ]
              : report.summary.high > 0
              ? [
                  'Review high-severity issues before deployment',
                  'Run additional testing',
                  'Consider a professional security audit for production',
                ]
              : report.score < 70
              ? [
                  'Address medium and low severity issues',
                  'Improve code quality and best practices',
                  'Re-audit after improvements',
                ]
              : [
                  'Contract passed audit with good score',
                  'Recommend testing on testnet',
                  'Consider professional audit for high-value contracts',
                ],
        };
      } catch (error: any) {
        return {
          success: false,
          error: error.message,
        };
      }
    },
  },
});
