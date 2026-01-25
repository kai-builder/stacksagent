<!--
  This README is the single source of truth.
  It's automatically copied to cli/README.md during `npm run build`
-->

# Stacks Agent

> AI Skill for building Stacks blockchain applications - Bitcoin's most powerful smart contract layer

An intelligent AI assistant that provides development guidance for Clarity smart contracts, DeFi integration, and blockchain development on Stacks. Works with **Claude Code, Cursor, Windsurf, Antigravity, GitHub Copilot, Kiro, and Codex**.

![Stacks Agent](https://img.shields.io/npm/v/stacks-agent?color=blue&label=stacks-agent)
![License](https://img.shields.io/npm/l/stacks-agent)
![Downloads](https://img.shields.io/npm/dm/stacks-agent)

## ✨ Features

**Highlights:**
- 🎯 **40 Production Code Examples** - Real code from live dApps (sbtc-market, stacksagent, STX City)
- 🕸️ **100 Knowledge Relationships** - Connected concepts across domains
- 🚫 **Zero Deprecated Code** - All modern @stacks/connect v7+ API patterns
- 🔒 **Security-First Examples** - Post-conditions, error handling, real vulnerabilities

**557+ Knowledge Base Entries Across 15 Domains:**

### Core Language & Tools (175 entries)
- **🔷 61 Clarity Functions** - Complete language reference with examples
- **⚛️ 75 Stacks.js Utilities** - Wallet, transactions, CV constructors, API integration
- **📋 14 Contract Templates** - SIP-010, SIP-009, DAO, Vault, Marketplace, Stacking
- **🚀 25 Deployment Steps** - Testnet, mainnet, and devnet workflows

### Domain-Specific Integrations (247 entries)
- **🌐 21 BNS Operations** - Name registration, resolution (Clarity + JS + API)
- **💰 25 Stacking Guides** - PoX stacking and pool delegation (Clarity + JS + API)
- **🔄 87 DeFi Protocols** - Alex, Velar, Bitflow, USDCx bridging, multi-DEX routing (Clarity + JS + API)
- **🎨 30 NFT Operations** - SIP-009, minting, marketplace patterns (Clarity + JS + API)
- **💎 40 Token Operations** - SIP-010 fungible tokens, DeFi integrations (Clarity + JS + API)
- **🔐 14 Authentication** - Wallet auth, JWT, sessions, token-gating (**No Gaia** - deprecated) (Clarity + JS + API)
- **📊 30 Oracle Integration** - Pyth Network price feeds, VAA handling, Hermes API (Clarity + JS + API)

### Advanced & Specialized (135 entries)
- **🛡️ 15 Security Patterns** - Common vulnerabilities and secure implementations
- **🎯 40 Advanced Patterns** - Pagination, SWR, presales, lotteries, vesting, CSV export
- **🔗 30 Chainhooks** - Event indexing, webhooks, predicates, ordinals tracking
- **🤖 50 Trading Bots** - Automated trading, wallet SDKs, Privy, bonding curves

## 🎯 Use Cases

- Generate Clarity smart contracts from natural language
- Audit contracts for security vulnerabilities
- Integrate with DeFi protocols (swaps, liquidity, lending)
- **Bridge USDC from Ethereum to Stacks (USDCx)**
- **Swap USDCx across multiple DEXs (Bitflow, Alex, Velar)**
- Integrate Pyth Network oracle for price feeds
- Deploy to testnet/mainnet
- Build dApps with Stacks.js
- Implement stacking and BNS features

## 📦 Installation

### Using CLI (Recommended)

```bash
# Install globally
npm install -g stacksagent

# Go to your project
cd /path/to/your/project

# Install for your AI assistant
stacksagent init --ai claude      # Claude Code
stacksagent init --ai cursor      # Cursor
stacksagent init --ai windsurf    # Windsurf
stacksagent init --ai antigravity # Antigravity
stacksagent init --ai copilot     # GitHub Copilot
stacksagent init --ai kiro        # Kiro
stacksagent init --ai codex       # OpenAI Codex
stacksagent init --ai all         # All platforms
```

### Manual Installation

Copy the appropriate folders to your project:

| AI Assistant    | Folders to Copy                                          |
| --------------- | -------------------------------------------------------- |
| Claude Code     | `.claude/skills/stacks-agent/`                           |
| Cursor          | `.cursor/commands/stacks-agent.md` + `.shared/stacks-agent/` |
| Windsurf        | `.windsurf/workflows/stacks-agent.md` + `.shared/stacks-agent/` |
| Antigravity     | `.agent/workflows/stacks-agent.md` + `.shared/stacks-agent/` |
| GitHub Copilot  | `.github/prompts/stacks-agent.prompt.md` + `.shared/stacks-agent/` |
| Kiro            | `.kiro/steering/stacks-agent.md` + `.shared/stacks-agent/` |
| Codex           | `.codex/skills/stacks-agent/`                            |

## 🚀 Usage

### Claude Code

The skill activates automatically when you request Stacks development work, tag or mention the `stacksagent`

```
Create a meme token called PEPE with 1 billion supply @stacksagent
```

### Cursor / Windsurf / Antigravity

Use the slash command:

```
/stacks-agent Create a meme token called PEPE with 1 billion supply
```

### GitHub Copilot

Reference in chat:

```
@stacks-agent How do I swap tokens on Alex?
```

## 💡 Example Prompts

**Basic Queries:**
```
"Create a SIP-010 token with burn mechanism"
"Build an NFT collection with royalties"
"Audit this Clarity contract for security issues"
"Deploy my contract to testnet"
```

**Production Code Examples (New in v2.0):**
```
"Show me a complete working example of swapping tokens with slippage protection"
"How do I connect a wallet using the new @stacks/connect v7 API?"
"Give me production code for NFT marketplace listing"
"Show me how to integrate Pyth oracle for BTC/USD price"
"How do I implement JWT authentication with wallet signatures?"
"Show me a secure token transfer with post-conditions"
```

**USDCx Bridging & Multi-DEX (New in v1.6.0):**
```
"How do I bridge USDC from Ethereum to Stacks?"
"Show me how to swap USDCx to STX on Bitflow"
"How do I get quotes from Alex and Bitflow SDKs?"
"Build a multi-token swap using Bitflow router"
"What are the contract addresses for USDCx on mainnet?"
"Show me a two-step swap pattern: USDCx -> STX -> ALEX"
```

**With Relationships:**
```
"What are the dependencies for implementing a token swap?"
"Show me all security patterns related to NFT marketplace"
"What JavaScript SDK functions implement Clarity stacking?"
```

## 🔍 Knowledge Base Search

The skill includes a powerful BM25-based search engine:

```bash
# Auto-detect domain
python3 .claude/skills/stacks-agent/scripts/search.py "define-public"

# Search specific domain
python3 .claude/skills/stacks-agent/scripts/search.py "swap tokens" --domain defi

# Get more results
python3 .claude/skills/stacks-agent/scripts/search.py "security" --domain security -n 10

# JSON output
python3 .claude/skills/stacks-agent/scripts/search.py "stx transfer" --domain stacksjs -f json
```

**Available domains**:
- `clarity` - Syntax and functions
- `templates` - Contract templates
- `security` - Security patterns
- `defi` - DeFi protocols (swaps, liquidity, stacking, oracles)
- `nfts` - NFT operations (minting, marketplace, royalties)
- `tokens` - Token operations (SIP-010, vesting, allowances)
- `auth` - Authentication (wallet connect, JWT, sessions)
- `stacksjs` - JavaScript snippets
- `bns` - BNS operations
- `stacking` - Stacking guides
- `deployment` - Deployment steps
- `auto` - Auto-detect (default)

## 🎯 Production Code Examples (New in v2.0)

Search 40 complete, production-tested code examples extracted from live dApps:

```bash
# Search examples
python3 .claude/skills/stacks-agent/scripts/search.py "how to swap" --examples

# Filter by domain
python3 .claude/skills/stacks-agent/scripts/search.py "marketplace" --domain nfts --examples

# Filter by difficulty
python3 .claude/skills/stacks-agent/scripts/search.py "token" --difficulty beginner --examples

# Search specific example type
python3 .claude/skills/stacks-agent/scripts/search.py "debug" --example-type debugging
```

### Example Types
- **quickstart** - Single-feature examples (8 examples)
- **integration** - Multi-step workflows (12 examples)
- **debugging** - Troubleshooting failed transactions (3 examples)
- **best-practice** - Recommended patterns (3 examples)
- **security** - Security-focused implementations (2 examples)

### Example Coverage

**DeFi (10 examples)**:
- Swap with slippage protection (sbtc-market-frontend)
- Add/remove liquidity (prediction markets)
- Pyth oracle integration with VAA
- Delegate stacking to PoX pools
- Bonding curve buys (STX City)
- Multi-hop swap routing
- Debug failed swaps
- Secure token approvals

**NFT (10 examples)**:
- Mint/transfer with SIP-009 compliance
- Marketplace listing and buying (Gamma patterns)
- NFT royalties (EIP-2981-like)
- Batch minting for airdrops
- Dynamic metadata updates
- Collection launch workflows
- Debug transfer failures
- Secure marketplace with escrow

**Tokens (8 examples)**:
- Deploy SIP-010 tokens
- Secure transfers with post-conditions
- Token allowances (DEX integration)
- Vesting schedules with cliff periods
- Token burns (deflationary mechanics)
- Multi-token atomic swaps
- Debug transfer failures

**Security (7 examples)**:
- Reentrancy prevention
- Integer overflow protection
- Access control (RBAC)
- Input validation
- Rate limiting for DoS
- Secure randomness
- Privilege escalation prevention

**Auth (5 examples)**:
- Wallet connect flow (sbtc-market)
- JWT authentication via signatures (stacksagent)
- Protected routes with persistence (STX City)
- NFT token gating
- Session management with cleanup

### Example Output Format

Each example includes:
- ✅ **Complete working code** from production dApps
- ✅ **Test inputs/outputs** with valid JSON
- ✅ **Common pitfalls** from real bugs
- ✅ **Live example URLs** to actual code
- ✅ **Modern API patterns** (@stacks/connect v7+)
- ✅ **Security best practices** (post-conditions, deny mode)

## 🕸️ Knowledge Graph Relationships (New in v2.0)

100 relationships connect concepts across domains:

```bash
# Get related entries for top results
python3 .claude/skills/stacks-agent/scripts/search.py "swap tokens" --include-relationships

# Export relationship graph
python3 -c "from scripts.relationships import get_graph; print(get_graph().export_graph('mermaid'))"
```

### Relationship Types
- **requires** - Critical dependency (e.g., "swap requires ft-transfer")
- **uses** - Functional dependency (e.g., "DEX uses post-conditions")
- **implements** - Standard compliance (e.g., "token implements SIP-010")
- **javascript-for** - Language bridge (e.g., "SDK implements Clarity function")
- **prevents** - Security defense (e.g., "access control prevents unauthorized access")
- **similar-to** - Alternative approach
- **conflicts** - Incompatibility
- **complements** - Enhanced together

### Example Output

```
Search: "name-to-address"

Result: bns:1 - name-to-address function

📚 Related Entries:
  [requires] clarity-syntax:59 (strength: 10) - Uses contract-call?
  [javascript-for] bns:12 (strength: 10) - SDK implements resolution
  [uses] security-patterns:1 (strength: 8) - Needs access control
```

## 📚 Knowledge Base Contents

### Clarity Language (61 entries)
Types, functions, control flow, arithmetic, comparisons, maps, tokens, STX operations

### Contract Templates (14 entries)
- **Tokens**: SIP-010 basic, mintable, burnable, capped
- **NFTs**: SIP-009 basic, mintable, royalties
- **DeFi**: Vault basic/timelocked, liquidity pool
- **DAO**: Basic DAO, treasury management
- **Other**: Marketplace, stacking pool

### Security Patterns (15 entries)
- Critical: Access control, unchecked transfers
- High: Reentrancy, arithmetic safety
- Medium: Input validation, front-running
- Low: Code style, gas optimization

### DeFi Protocols (87 entries)
Alex, Velar, Bitflow, Zest, StackingDAO, Boost, Faktory integration patterns

### USDCx Bridging & Multi-DEX (New in v1.6.0)

**Bridge Operations:**
- Deposit USDC from Ethereum → mint USDCx on Stacks
- Burn USDCx on Stacks → withdraw USDC on Ethereum
- Address encoding (Stacks ↔ Ethereum)
- Bridge timing: ~15 min deposit, ~60 min withdrawal

**Multi-DEX Swap Routing:**
- Bitflow: `swap-helper-a/b/c` for 2/3/4-hop swaps
- Alex: `swap-helper`, `swap-helper-a` with factors
- Velar: `path-apply` with tuple-based routing
- Stableswap: stSTX↔STX, USDH↔USDCx

**Quote APIs:**
- Bitflow SDK: `getQuoteForRoute()`
- Alex SDK: `getAmountTo()` with Currency enums
- Fallback rates and price caching

**Contract Addresses:**
| Contract | Address |
|----------|---------|
| USDCx | `SP120SBRBQJ00MCWS7TM5R8WJNTTKD5K0HFRC2CNE.usdcx` |
| Bitflow Router | `SM1793C4R5PZ4NS4VQ4WMP7SKKYVH8JZEWSZ9HCCR.router-stableswap-xyk-multihop-v-1-2` |
| Alex AMM | `SP102V8P0F7JX67ARQ77WEA3D3CFB5XW39REDT0AM.amm-pool-v2-01` |
| Velar | `SP20X3DC5R091J8B6YPQT638J8NR1W83KN6TN5BJY.path-apply_staging` |

### Stacks.js (30 entries)
Wallet connection, transactions, Clarity values, API calls, post-conditions

### BNS (10 entries)
Name resolution, registration, transfer, updates

### Stacking (15 entries)
Direct stacking, delegation, pools, rewards

### Deployment (25 entries)
Testnet, mainnet, devnet workflows with Clarinet

## 🛡️ Security Best Practices

All generated contracts include:

- ✅ Access control (`tx-sender` validation)
- ✅ Error handling (`try!`, `unwrap!`)
- ✅ Input validation (`asserts!`)
- ✅ Named error constants
- ✅ Kebab-case naming
- ✅ Network compatibility checks

## 🌐 Networks

- **Mainnet**: Production (SP... addresses)
- **Testnet**: Testing (ST... addresses, free STX)
- **Devnet**: Local development (Clarinet)

## 🔧 Prerequisites

- Python 3.x (for search functionality)
- Node.js 18+ (for CLI installation)

```bash
python3 --version
node --version
```

## 📖 Documentation

- [Stacks Docs](https://docs.stacks.co)
- [Clarity Reference](https://docs.stacks.co/clarity)
- [Hiro Platform](https://platform.hiro.so)
- [Explorer (Mainnet)](https://explorer.hiro.so)
- [Explorer (Testnet)](https://explorer.hiro.so/?chain=testnet)

## 🔗 DeFi Resources

- [Alex DEX](https://app.alexlab.co)
- [Velar DEX](https://app.velar.co)
- [Bitflow DEX](https://app.bitflow.finance)
- [Zest Protocol](https://www.zestprotocol.com)
- [USDCx Bridge Docs](https://docs.stacks.co/more-guides/bridging-usdcx)
- [Circle xReserve](https://www.circle.com)

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add knowledge entries to appropriate CSV files
5. Test the search functionality
6. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

Built for the Stacks community with:
- [Stacks.js](https://github.com/hirosystems/stacks.js) by Hiro Systems
- [Stacks Blockchain](https://www.stacks.co)
- [Clarity Language](https://docs.stacks.co/clarity)

## 📞 Support

- GitHub Issues: [Report bugs or request features](https://github.com/kai-builder/stacks-agent/issues)
- Stacks Discord: [Join the community](https://discord.gg/stacks)
- Twitter: [@kai_builder](https://twitter.com/kai_builder)

## 🎯 Roadmap

### Completed (v1.6.0) ✅
- [x] USDCx bridging from Ethereum (62 new entries)
- [x] Multi-DEX swap routing (Bitflow, Alex, Velar)
- [x] AMM quote API patterns (SDK integration)
- [x] 557+ total knowledge base entries

### Completed (v2.0) ✅
- [x] Multi-platform AI skill support (7 platforms)
- [x] 495+ knowledge base entries
- [x] BM25 search engine with regex boosting
- [x] CLI installer
- [x] 40 production code examples from live dApps
- [x] 100 knowledge graph relationships
- [x] Modern API patterns (@stacks/connect v7+)
- [x] Deprecated code removal (Gaia, openContractCall, showConnect)

### In Progress (v2.1)
- [ ] Web-based search interface
- [ ] Interactive example playground
- [ ] Community example contributions

### Future (v3.0+)
- [ ] VSCode extension
- [ ] Real-time contract analysis
- [ ] Semantic search with embeddings
- [ ] Multi-language support (Chinese, Spanish)

---

**Made with ❤️ for the Stacks community**

*Build Bitcoin-secured dApps with AI assistance*
