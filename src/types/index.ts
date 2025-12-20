export interface WalletInfo {
  address: string;
  network: 'mainnet' | 'testnet';
}

export interface TokenBalance {
  symbol: string;
  balance: string;
  decimals: number;
  usdValue?: number;
}

export interface WalletBalance {
  stx: string;
  tokens: TokenBalance[];
  totalUsdValue?: number;
}

export interface PriceData {
  symbol: string;
  priceUsd: number;
  priceStx?: number;
  change24h: number;
  lastUpdated: number;
}

export interface PoolInfo {
  poolId: string;
  protocol: string;
  tokenA: string;
  tokenB: string;
  apy: number | null;
  tvl: number | null;
  volume24h: number | null;
}

export interface TokenMarketSummary {
  symbol: string;
  name: string;
  contractId: string;
  priceUsd: number | null;
  change24h: number | null;
  liquidityUsd: number | null;
  volume24hUsd: number | null;
  holders: number | null;
  deployedAt?: string | null;
  description?: string | null;
}

export interface SwapQuote {
  fromToken: string;
  toToken: string;
  fromAmount: string;
  toAmount: string;
  rate: string;
  slippage: number;
  fee: string;
  route: string[];
  protocol: string;
}

export interface SwapResult {
  txHash: string;
  status: 'pending' | 'success' | 'failed';
  fromToken: string;
  toToken: string;
  fromAmount: string;
  toAmount: string;
}

export interface StackingInfo {
  currentCycle: number;
  nextCycleStart: number;
  minStackingAmount: string;
  estimatedApy: number;
}

export interface StackingStatus {
  address: string;
  isStacking: boolean;
  stackedAmount?: string;
  unlockHeight?: number;
  poxAddress?: string;
  cyclesRemaining?: number;
  estimatedRewards?: string;
}

export interface PortfolioSummary {
  address: string;
  totalValueUsd: number;
  stxBalance: string;
  stxValueUsd: number;
  tokens: TokenBalance[];
  stackingValue?: number;
  defiPositions?: DefiPosition[];
}

export interface DefiPosition {
  protocol: string;
  type: 'liquidity' | 'lending' | 'borrowing' | 'staking';
  assets: string[];
  valueUsd: number;
  apy?: number;
}

export interface Transaction {
  txHash: string;
  timestamp: number;
  type: string;
  from: string;
  to?: string;
  amount?: string;
  token?: string;
  status: 'pending' | 'success' | 'failed';
  description: string;
}

export interface Config {
  network: 'mainnet' | 'testnet';
  wallet: {
    keystorePath: string;
    autoLockMinutes: number;
  };
  rpc: {
    primary: string;
    fallback: string;
  };
  trading: {
    defaultSlippage: number;
    maxSlippage: number;
    preferredDex: string;
  };
  limits: {
    maxSingleTxUsd: number;
    dailyTxLimitUsd: number;
    requireConfirmation: boolean;
  };
  protocols: {
    [key: string]: {
      enabled: boolean;
    };
  };
}

export interface EncryptedKeystore {
  version: number;
  crypto: {
    cipher: string;
    ciphertext: string;
    cipherparams: {
      iv: string;
    };
    kdf: string;
    kdfparams: {
      salt: string;
      n: number;
      r: number;
      p: number;
      dklen: number;
    };
    mac: string;
  };
  address: string;
}

// Clarity contract types
export interface ClarityContract {
  name: string;
  code: string;
  analysis?: ContractAnalysis;
}

export interface ContractAnalysis {
  syntaxValid: boolean;
  functions: FunctionInfo[];
  dataVars: DataVarInfo[];
  maps: MapInfo[];
  traits: string[];
  dependencies: string[];
  estimatedComplexity: 'low' | 'medium' | 'high';
}

export interface FunctionInfo {
  name: string;
  type: 'public' | 'private' | 'read-only';
  parameters: ParameterInfo[];
  returnType: string;
}

export interface ParameterInfo {
  name: string;
  type: string;
}

export interface DataVarInfo {
  name: string;
  type: string;
  initialValue: string;
}

export interface MapInfo {
  name: string;
  keyType: string;
  valueType: string;
}

export interface AuditReport {
  contractName: string;
  timestamp: string;
  summary: {
    totalIssues: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
    informational: number;
  };
  securityIssues: SecurityIssue[];
  bestPracticeIssues: BestPracticeIssue[];
  optimizationSuggestions: OptimizationSuggestion[];
  score: number;
  recommendation: 'approved' | 'needs-review' | 'critical-issues';
}

export interface SecurityIssue {
  severity: 'critical' | 'high' | 'medium' | 'low';
  category: string;
  title: string;
  description: string;
  location: {
    line?: number;
    function?: string;
  };
  recommendation: string;
  cwe?: string;
}

export interface BestPracticeIssue {
  severity: 'medium' | 'low' | 'informational';
  title: string;
  description: string;
  location: {
    line?: number;
    function?: string;
  };
  recommendation: string;
}

export interface OptimizationSuggestion {
  title: string;
  description: string;
  estimatedGasSavings?: string;
  location: {
    line?: number;
    function?: string;
  };
}

export interface ContractGenerationOptions {
  contractType: 'fungible-token' | 'non-fungible-token' | 'vault' | 'dao' | 'marketplace' | 'custom';
  features?: string[];
  includeTests?: boolean;
  includeComments?: boolean;
}
