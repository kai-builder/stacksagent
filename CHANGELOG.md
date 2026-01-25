# Changelog

All notable changes to this project will be documented in this file.


## [1.6.0] - 2025-01-25

### Added

#### USDCx Bridging from Ethereum (62 new entries)
- **USDCx Bridge Operations** (IDs 26-40)
  - Burn USDCx to withdraw to Ethereum
  - Transfer and balance operations
  - Bridge deposit from ETH via Circle xReserve
  - Address encoding helpers (Stacks ↔ Ethereum)
  - Withdrawal transaction building
  - Bridge timing and costs documentation
  - Contract addresses (mainnet/testnet)

#### Multi-DEX Integration Patterns (IDs 41-62)
- **Bitflow Router Patterns**
  - `swap-helper-a` (2-hop: stableswap + 1 XYK)
  - `swap-helper-b` (3-hop: stableswap + 2 XYK)
  - `swap-helper-c` (4-hop: stableswap + 3 XYK)
  - Router v1.2 and v1.5 support
  - Trait imports for contract integration
  - USDCx → STX, USDCx → sBTC routes

- **Alex AMM Patterns**
  - `swap-helper` (direct swap)
  - `swap-helper-a` (multi-hop with factors)
  - Factor values (u100000000 = 1e8)

- **Velar Patterns**
  - `path-apply` tuple-based routing
  - Pool configuration format
  - STX ↔ VELAR swap examples

- **Stableswap Patterns**
  - stSTX ↔ STX swaps
  - USDH ↔ USDCx swaps

- **Contract Addresses**
  - All mainnet DEX router addresses
  - Pool addresses for common pairs
  - Token contract addresses

#### Frontend Integration Patterns (IDs 63-71)
- Bitflow swap argument builders
- Alex SDK quote integration
- Velar SDK swap building
- Batch quote fetching for portfolios
- Slippage calculation helpers
- Micro-unit conversion utilities

#### AMM Quote API Patterns (IDs 72-87)
- **Bitflow SDK**
  - Initialization with API keys
  - `getQuoteForRoute()` forward/reverse quotes
  - Token ID mappings

- **Alex SDK**
  - Initialization and configuration
  - `getAmountTo()` quote fetching
  - aUSD as USDC equivalent
  - Reverse quotes for selling

- **Quote Infrastructure**
  - Token decimals map (6 vs 8 decimals)
  - Symbol normalization
  - Unified quote function with fallback
  - Batch quote endpoint
  - Price caching with TTL
  - QuoteResult TypeScript interface

### Changed
- Total DeFi protocol entries increased from 25 to 87
- Updated version numbers: MCP 1.2.3 → 1.3.0, CLI 1.5.2 → 1.6.0

### Technical Details

#### New Contract Addresses Documented
| Contract | Address |
|----------|---------|
| USDCx Token | `SP120SBRBQJ00MCWS7TM5R8WJNTTKD5K0HFRC2CNE.usdcx` |
| USDCx Protocol | `SP120SBRBQJ00MCWS7TM5R8WJNTTKD5K0HFRC2CNE.usdcx-v1` |
| Bitflow Router v1.2 | `SM1793C4R5PZ4NS4VQ4WMP7SKKYVH8JZEWSZ9HCCR.router-stableswap-xyk-multihop-v-1-2` |
| Bitflow Router v1.5 | `SM1793C4R5PZ4NS4VQ4WMP7SKKYVH8JZEWSZ9HCCR.router-stableswap-xyk-multihop-v-1-5` |
| Alex AMM v2 | `SP102V8P0F7JX67ARQ77WEA3D3CFB5XW39REDT0AM.amm-pool-v2-01` |
| Velar path-apply | `SP20X3DC5R091J8B6YPQT638J8NR1W83KN6TN5BJY.path-apply_staging` |
| xReserve (ETH Mainnet) | `0x8888888199b2Df864bf678259607d6D5EBb4e3Ce` |

#### Token Decimals Reference
| Token | Decimals |
|-------|----------|
| STX, stSTX, WELSH, LEO, DROID, VELAR, USDCx | 6 |
| sBTC, DOG, ALEX, USDH | 8 |

---

## [1.5.2] - 2025-01-24

### Added
- Oracle integration with Pyth Network (30 entries)
- Chainhooks for event indexing (30 entries)
- Trading bot patterns (50 entries)

---

## [1.5.0] - 2025-01-20

### Added
- Initial release with 495+ knowledge base entries
- Multi-platform support (Claude Code, Cursor, Windsurf, Copilot, Kiro, Codex)
- BM25 search engine with regex boosting
- 40 production code examples
- 100 knowledge graph relationships

### Domains
- Clarity syntax (61 entries)
- Stacks.js utilities (75 entries)
- Contract templates (14 entries)
- Deployment workflows (25 entries)
- BNS operations (21 entries)
- Stacking guides (25 entries)
- DeFi protocols (25 entries)
- NFT operations (30 entries)
- Token operations (40 entries)
- Authentication (14 entries)
- Security patterns (15 entries)
- Advanced patterns (40 entries)

---

## Contributing

When adding new knowledge entries:
1. Edit the appropriate CSV in `.shared/stacks-agent/data/`
2. Copy to CLI assets: `cp .shared/stacks-agent/data/*.csv cli/src/assets/.shared/stacks-agent/data/`
3. Test search: `python3 .shared/stacks-agent/scripts/search.py "your query" --domain <domain>`
4. Update this CHANGELOG
5. Bump version in both `package.json` files
