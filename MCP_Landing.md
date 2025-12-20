# Stacks Agent MCP - Your AI-Powered Stacks Blockchain Assistant

> **Transform Claude into a powerful Stacks blockchain interface.** Chat with your wallet, trade tokens, manage DeFi positions, and interact with smart contracts—all through natural conversation.

---

## What is Stacks Agent MCP?

Stacks Agent MCP is a **Model Context Protocol (MCP) server** that brings the full power of the Stacks blockchain directly into Claude Desktop. Instead of navigating complex blockchain interfaces, you can simply chat with Claude to:

- 💰 **Manage your wallet** - Create, import, and check balances
- 📈 **Trade on DEXs** - Get quotes and swap tokens across Alex, Velar, and Bitflow
- 🔒 **Stack STX** - Earn Bitcoin rewards through Proof of Transfer
- 📊 **Track your portfolio** - Monitor holdings, transactions, and P&L
- 🌐 **Resolve BNS names** - Work with Bitcoin Name System addresses
- 🛠️ **Build smart contracts** - Generate and validate Clarity contracts

All with **enterprise-grade security**: your keys never leave your machine, everything is encrypted locally (AES-256-GCM), and your wallet auto-locks after inactivity.

---

## Core Features

### 1. Wallet Management

**Complete control of your Stacks wallet, securely encrypted on your machine.**

#### Available Operations
- **Create New Wallet** - Generate a fresh wallet with secure mnemonic
- **Import Wallet** - Import from 24-word phrase or private key
- **Balance Checking** - View STX and all token balances with USD values
- **Address Management** - Get your wallet address for receiving funds
- **Lock/Unlock** - Secure your wallet with password protection

#### Security Features
- **AES-256-GCM Encryption** - Military-grade encryption for your private keys
- **Local-Only Storage** - Keys stored at `~/.stacks-mcp/wallet.enc`, never transmitted
- **Auto-Lock** - Wallet automatically locks after 15 minutes of inactivity
- **Password Protection** - Strong password required for all sensitive operations
- **Mnemonic Backup** - 24-word recovery phrase (store securely offline!)

#### Example Conversations

```
You: Create a new wallet for me
Claude: I'll create a secure wallet for you. Please provide a strong password.

You: Use "MySecurePass123!"
Claude: ✓ Wallet created successfully!
        Address: SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7

        IMPORTANT - Save your recovery phrase:
        ocean hidden ... [24 words] ... copper moon

        Write these words down and store them safely offline!

---

You: What's my STX balance?
Claude: Your current balance:
        • 1,234.56 STX (~$892.15 USD)
        • 4.5M WELSH (~$1,204.32 USD)
        • 500 USDA (~$500.00 USD)

        Total portfolio value: $2,596.47
```

#### Available Tools
| Tool | Description |
|------|-------------|
| `wallet_create` | Create a new encrypted wallet |
| `wallet_import` | Import wallet from mnemonic or private key |
| `wallet_unlock` | Unlock wallet with password |
| `wallet_lock` | Lock wallet for security |
| `wallet_get_address` | Get your Stacks address |
| `wallet_get_balance` | View STX and token balances |
| `wallet_status` | Check wallet lock status |

---

### 2. Market Data & DEX Trading

**Real-time market data and seamless trading across multiple DEXs.**

#### Market Intelligence
- **Live Token Prices** - Real-time prices in USD and STX
- **Trending Tokens** - Discover popular tokens and new launches
- **Liquidity Pools** - View pools with APY, TVL, and 24h volume
- **Price Charts** - Track token performance and trends
- **Market Analytics** - Volume, holders, liquidity data

#### Multi-DEX Support
Trade across the leading Stacks DEXs with automatic best-route detection:
- **Alex** - Automated Market Maker
- **Velar** - Advanced trading platform
- **Bitflow** - High-efficiency swaps

#### Trading Features
- **Instant Quotes** - Get real-time swap quotes with rates and fees
- **Best Route Detection** - Automatically finds optimal swap path
- **Slippage Protection** - Configurable slippage tolerance (default 0.5%)
- **Fee Display** - Transparent fee breakdown before each trade
- **Transaction Limits** - Configurable daily limits for safety
- **Confirmation Required** - Built-in protection for large trades

#### Liquidity Management
- **Add Liquidity** - Provide liquidity to pools and earn fees
- **Remove Liquidity** - Withdraw your LP positions
- **APY Tracking** - Monitor pool performance and yields
- **LP Token Management** - Track your liquidity provider tokens

#### Example Conversations

```
You: What's the price of WELSH?
Claude: WELSH is currently trading at:
        • $0.000267 USD
        • 0.000371 STX
        • 24h change: +12.4%
        • Market cap: $2.3M
        • 24h volume: $145K

---

You: How much WELSH can I get for 100 STX?
Claude: Swap Quote for 100 STX → WELSH:

        You'll receive: ~4,521,304 WELSH
        Rate: 1 STX = 45,213 WELSH
        Price impact: 0.3%
        Fees: 0.3 STX (0.3%)
        Slippage tolerance: 0.5%
        Best route: STX → WELSH via Alex

        Estimated value: $1,206.18 USD

        Would you like to execute this swap?

---

You: Yes, swap it
Claude: I'll need to unlock your wallet first. Please provide your password.

You: MySecurePass123!
Claude: ✓ Wallet unlocked
        ✓ Swap executed successfully!

        Transaction: 0x7f3a8c9e2b1d...
        You received: 4,512,893 WELSH
        Status: Pending confirmation

        Your wallet has been locked for security.

---

You: Show me the best liquidity pools
Claude: Top Liquidity Pools by APY:

        1. STX/USDA (Alex)
           • APY: 24.5%
           • TVL: $2.1M
           • 24h Volume: $145K

        2. WELSH/STX (Velar)
           • APY: 18.2%
           • TVL: $890K
           • 24h Volume: $67K

        3. sBTC/STX (Bitflow)
           • APY: 15.7%
           • TVL: $4.5M
           • 24h Volume: $230K
```

#### Available Tools
| Tool | Description |
|------|-------------|
| `market_get_price` | Get real-time token price in USD/STX |
| `market_get_tokens` | List trending and new tokens |
| `market_get_pools` | View liquidity pools with APY/TVL |
| `dex_quote` | Get swap quote with fees and route |
| `dex_swap` | Execute token swap |
| `dex_add_liquidity` | Add liquidity to a pool |
| `dex_remove_liquidity` | Remove liquidity from pool |

---

### 3. Stacking (Proof of Transfer)

**Earn Bitcoin rewards by participating in Stacks consensus.**

#### What is Stacking?
Stacking is Stacks' consensus mechanism where you lock STX tokens to secure the network and earn **Bitcoin (BTC) rewards**. It's Stacks' unique Proof of Transfer (PoX) system.

#### Features
- **Cycle Information** - View current cycle, timing, and parameters
- **Stacking Status** - Check your stacking position and rewards
- **Direct Stacking** - Stack STX directly (requires 100,000+ STX minimum)
- **Pool Delegation** - Delegate to pools with lower minimums
- **Reward Tracking** - Monitor Bitcoin rewards earned
- **APY Estimates** - Current stacking yield in BTC

#### Stacking Options

**Direct Stacking** (Solo)
- Minimum: 100,000 STX
- Rewards: Paid directly to your BTC address
- Control: Full control over your stack
- Commitment: 1 cycle minimum (~2 weeks)

**Pool Delegation**
- Minimum: As low as 1 STX (pool dependent)
- Rewards: Distributed by pool operator
- Convenience: No minimum threshold
- Flexibility: Various lock periods available

#### Example Conversations

```
You: What's the current stacking APY?
Claude: Current Stacking Information:

        Cycle #82
        • APY: ~8.2% (paid in BTC)
        • Minimum to stack: 100,000 STX
        • Next cycle starts: Block 123,450 (~Feb 15, 2025)
        • Cycle duration: ~2 weeks
        • Current participants: 45,234 stackers
        • Total STX locked: 892M STX (62% of supply)

---

You: Am I currently stacking?
Claude: Stacking Status for SP2J6ZY...9EJ7:

        ✓ Active Stacking Position
        • Amount stacked: 125,000 STX
        • Unlock height: Block 125,600 (~March 1, 2025)
        • BTC address: bc1q...xyz
        • Cycles remaining: 3
        • Estimated rewards: 0.045 BTC
        • Value earned: ~$1,890 USD

---

You: Stack my STX for 6 cycles
Claude: I can help you stack your STX. You currently have 125,000 STX.

        Stacking Details:
        • Amount: 125,000 STX
        • Duration: 6 cycles (~12 weeks)
        • Estimated rewards: ~0.13 BTC (~$5,460)
        • Unlock date: ~May 15, 2025

        Note: Your STX will be locked for this period. You'll need
        to provide a Bitcoin address to receive rewards.

        Proceed with stacking?
```

#### Available Tools
| Tool | Description |
|------|-------------|
| `stacking_get_info` | Get current cycle and stacking parameters |
| `stacking_get_status` | Check your stacking status and rewards |
| `stacking_stack` | Stack STX directly for BTC rewards |
| `stacking_delegate` | Delegate to a stacking pool |

---

### 4. Portfolio Management

**Comprehensive portfolio tracking and analytics.**

#### Features
- **Portfolio Summary** - Total value, holdings breakdown, allocations
- **Transaction History** - Complete record of all wallet activity
- **Performance Tracking** - Portfolio value over time
- **P&L Calculations** - Profit and loss analytics
- **DeFi Positions** - Track staking, liquidity, and other DeFi activities
- **Multi-Token Support** - STX and all fungible tokens

#### Analytics Provided
- Total portfolio value (USD)
- Individual token balances and values
- Allocation percentages
- Stacking positions and rewards
- Liquidity pool positions
- Historical performance
- Transaction categorization

#### Example Conversations

```
You: Show me my portfolio
Claude: Portfolio Summary (SP2J6ZY...9EJ7)

        Total Value: $15,234.56

        Holdings:
        • 1,234.56 STX           $892.15    (5.9%)
        • 4,521,304 WELSH        $1,206.18  (7.9%)
        • 500.00 USDA            $500.00    (3.3%)

        DeFi Positions:
        • Stacking: 125,000 STX  $90,312.50 (59.3%)
        • LP: STX/USDA           $3,523.73  (23.1%)

        24h Change: +$342.18 (+2.3%)

---

You: Show my transaction history
Claude: Recent Transactions:

        Today
        • Swap: 100 STX → 4.5M WELSH     Completed ✓
          $72.34 → $1,206.18 (+1566%)
          TX: 0x7f3a...

        Yesterday
        • Received: 50 STX               Completed ✓
          From: SP1J8K...
          TX: 0x9c2b...

        Dec 18
        • Add Liquidity: STX/USDA        Completed ✓
          Added: 1000 STX + 723 USDA
          LP tokens received: 850.45
          TX: 0x4e1f...

        Dec 17
        • Stack: 125,000 STX             Completed ✓
          Duration: 6 cycles
          TX: 0x2a8d...

---

You: How has my portfolio performed this month?
Claude: Portfolio Performance (Dec 1-20, 2025)

        Starting value: $12,450.00
        Current value:  $15,234.56

        Gain: $2,784.56 (+22.4%)

        Performance by Asset:
        • WELSH: +156% ($1,206 → $1,882)
        • STX Stacking: +0.4% (BTC rewards)
        • LP Position: +12% (fees earned)
        • STX: -3.2% (market movement)

        Best performer: WELSH (+$676)
        Total fees earned: $89.23
```

#### Available Tools
| Tool | Description |
|------|-------------|
| `portfolio_summary` | Get comprehensive portfolio overview |
| `portfolio_transactions` | View transaction history |
| `portfolio_history` | Track portfolio value over time |

---

### 5. Bitcoin Name System (BNS)

**Human-readable names for Stacks addresses.**

#### What is BNS?
BNS is Stacks' naming system—like ENS for Ethereum. It maps human-readable names (like `muneeb.btc`) to Stacks addresses, making it easier to send/receive funds and identify addresses.

#### Features
- **Name Resolution** - Convert names to addresses and vice versa
- **Primary Name Lookup** - Get the primary name for any address
- **Name Ownership** - View all names owned by an address
- **Name Details** - Registration info, renewal height, STX burned
- **Validation** - Check if names are valid and resolvable
- **NFT Integration** - BNS names are NFTs with token IDs

#### Use Cases
- Send STX to `alice.btc` instead of `SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7`
- Display names in your app instead of long addresses
- Verify name ownership and registration details
- Track BNS name portfolios and values

#### Example Conversations

```
You: What address does muneeb.btc point to?
Claude: BNS Name Resolution:

        muneeb.btc → SP000000000000000000002Q6VF78

        Name Details:
        • Owner: SP000000000000000000002Q6VF78
        • Registered: Block 5,200
        • Renewal height: Block 175,000
        • Token ID: 1
        • Status: Active

---

You: What's the BNS name for SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7?
Claude: Primary BNS name for SP2J6ZY...9EJ7:

        alice.btc

        This address also owns:
        • alice.btc (primary)
        • alice-stacks.btc
        • defi-trader.btc

        Total names: 3

---

You: Does bitcoin.btc exist?
Claude: BNS Name Check: bitcoin.btc

        ✓ Name is registered and resolvable

        Owner: SP3D6PV2ACBPEKYJTCMH7HEN02KP87QSP8KTEH335
        Renewal height: Block 182,450

        This name can be used for transactions.

---

You: What's the token ID for alice.btc?
Claude: BNS Name Info: alice.btc

        Token ID: 7,823

        This BNS name is an NFT with token ID 7,823.
        It can be traded, transferred, or listed on marketplaces.
```

#### Available Tools
| Tool | Description |
|------|-------------|
| `bns_get_primary_name` | Get primary BNS name for an address |
| `bns_resolve_name` | Convert BNS name to Stacks address |
| `bns_get_owned_names` | List all names owned by address |
| `bns_get_name_info` | Get detailed name information |
| `bns_can_resolve` | Check if name is valid/resolvable |
| `bns_get_name_from_id` | Get BNS name from NFT token ID |
| `bns_get_id_from_name` | Get token ID from BNS name |

---

### 6. Smart Contract Development

**Generate, validate, and analyze Clarity smart contracts.**

> **Note:** This feature is currently in development. Templates and validation tools are available, but full deployment integration is coming soon.

#### Available Contract Templates

**Fungible Tokens (SIP-010)**
- Complete SIP-010 compliant token
- Configurable name, symbol, supply, decimals
- Transfer, mint, burn functions
- Get balance, total supply

**Non-Fungible Tokens (SIP-009)**
- SIP-009 compliant NFT contract
- Configurable name, symbol, base URI
- Mint, transfer, ownership tracking
- Metadata support

**Vault Contract**
- Simple STX vault with deposit/withdraw
- Balance tracking per user
- Total deposits monitoring
- Secure fund management

**DAO Contract**
- Basic governance with proposals
- Member management
- Voting mechanism (yes/no)
- Proposal execution tracking

**NFT Marketplace**
- List NFTs for sale
- Buy/sell functionality
- Platform fees (configurable)
- Expiry dates for listings

**Custom Contract**
- Minimal skeleton template
- Common constants and patterns
- Ready to customize

#### Contract Validation

Automated analysis and security checks:

**Syntax Validation**
- Bracket matching
- Function definition validation
- Clarity syntax compliance

**Security Analysis**
- Access control checks (tx-sender validation)
- STX transfer safety
- External call validation
- Error handling patterns
- Common vulnerability detection

**Best Practices**
- Naming convention compliance
- Code organization
- Gas optimization suggestions
- Redundant operation detection

**Code Analysis**
- Function extraction and cataloging
- Data variable identification
- Map structure analysis
- Trait implementation detection
- Dependency mapping
- Complexity estimation

#### Example Use Cases

```
Generate a fungible token contract for a new token called "CommunityToken"
with symbol "COMM", 1 million supply, and 6 decimals.

Create an NFT collection contract for "StacksPunks" with symbol "SPUNKS".

Validate this Clarity contract and check for security issues.

Analyze this DAO contract and suggest optimizations.
```

#### Coming Soon
- Full contract deployment from Claude
- Testnet/mainnet deployment
- Contract interaction tools
- Unit test generation
- Automated security audits

---

## Installation & Setup

### Prerequisites
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Claude Desktop** - [Download here](https://claude.ai/download)

### Quick Install

**Option 1: Install from npm (when published)**
```bash
npm install -g stacksagent-mcp
```

**Option 2: Build from Source (recommended for now)**
```bash
# Clone the repository
git clone https://github.com/kai-builder/stacksagent-mcp.git
cd stacksagent-mcp

# Install dependencies
npm install

# Build the project
npm run build
```

### Configure Claude Desktop

1. **Locate your config file:**
   - **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

2. **Add the MCP server:**

If installed from npm:
```json
{
  "mcpServers": {
    "stacks": {
      "command": "npx",
      "args": ["-y", "stacksagent-mcp"],
      "env": {
        "STACKS_NETWORK": "mainnet"
      }
    }
  }
}
```

If built from source:
```json
{
  "mcpServers": {
    "stacks": {
      "command": "node",
      "args": ["/absolute/path/to/stacksagent-mcp/dist/index.js"],
      "env": {
        "STACKS_NETWORK": "mainnet"
      }
    }
  }
}
```

3. **Restart Claude Desktop** (fully quit and reopen)

4. **Verify installation:**
   - Open Claude Desktop
   - Start a new chat
   - Ask: "What Stacks blockchain tools do you have available?"
   - Claude should list the MCP tools

---

## Configuration

The server creates a config file at `~/.stacks-mcp/config.json` on first run.

**Default Configuration:**
```json
{
  "network": "mainnet",
  "wallet": {
    "keystorePath": "~/.stacks-mcp/wallet.enc",
    "autoLockMinutes": 15
  },
  "rpc": {
    "primary": "https://api.hiro.so",
    "fallback": "https://api.mainnet.hiro.so"
  },
  "trading": {
    "defaultSlippage": 0.5,
    "maxSlippage": 5.0,
    "preferredDex": "auto"
  },
  "limits": {
    "maxSingleTxUsd": 1000,
    "dailyTxLimitUsd": 5000,
    "requireConfirmation": true
  },
  "protocols": {
    "alex": { "enabled": true },
    "velar": { "enabled": true },
    "bitflow": { "enabled": true }
  }
}
```

**Customization Options:**
- `autoLockMinutes` - Wallet auto-lock timeout (default: 15)
- `defaultSlippage` - Default slippage tolerance % (default: 0.5)
- `maxSingleTxUsd` - Maximum single transaction in USD (default: 1000)
- `dailyTxLimitUsd` - Maximum daily transactions in USD (default: 5000)
- `preferredDex` - Preferred DEX: "alex", "velar", "bitflow", or "auto"

---

## Security Best Practices

### Wallet Security
1. **Use a Strong Password**
   - Minimum 12 characters
   - Mix uppercase, lowercase, numbers, symbols
   - Store in a password manager

2. **Backup Your Mnemonic**
   - Write down your 24-word phrase
   - Store offline in a secure location
   - Never share with anyone
   - Never store digitally (no photos, cloud storage, etc.)

3. **Lock Your Wallet**
   - Wallet auto-locks after 15 minutes
   - Manually lock after sensitive operations
   - Always lock before leaving your computer

4. **Verify Transactions**
   - Review all transaction details before confirming
   - Check amounts, addresses, and fees
   - Be cautious of large transactions

### Key Storage
- Private keys encrypted with AES-256-GCM
- Keys never leave your local machine
- Encrypted keystore at `~/.stacks-mcp/wallet.enc`
- Password protected with scrypt key derivation

### Transaction Safety
- All write operations require unlocked wallet
- Configurable transaction limits (USD)
- Slippage protection on swaps
- Post-conditions for transaction safety
- Confirmation required for large trades

---

## Troubleshooting

### Claude Desktop doesn't see the tools

**Check 1:** Verify JSON syntax in `claude_desktop_config.json`
- Use a JSON validator
- Check for missing commas, brackets
- Ensure absolute paths are correct

**Check 2:** Restart Claude Desktop completely
- Quit Claude Desktop (don't just close window)
- Kill any Claude processes
- Reopen Claude Desktop

**Check 3:** Check MCP server logs
- macOS: `~/Library/Logs/Claude/mcp*.log`
- Windows: `%APPDATA%\Claude\Logs\mcp*.log`

### "Wallet is locked" error

Your wallet needs to be unlocked for write operations:
```
You: Unlock my wallet with password "YourPassword"
```

Remember: Wallet auto-locks after 15 minutes of inactivity.

### Transaction fails

**Common causes:**
1. Insufficient STX balance for transaction + fees
2. Slippage tolerance too low for volatile market
3. Token pair lacks liquidity
4. Network congestion

**Solutions:**
- Check balance: "What's my STX balance?"
- Increase slippage tolerance in config
- Wait a few minutes and retry
- Try a different DEX route

### Price data unavailable

Some tokens may not have price data yet. Major tokens supported:
- STX
- WELSH
- USDA
- sBTC
- MIA
- NYC
- And more...

For newly launched tokens, price data may take time to populate.

### Build errors

**"Module not found" errors:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**TypeScript errors:**
```bash
npm install -g typescript
npm run build
```

---

## Roadmap

### Phase 2 (In Development)
- [x] BNS integration
- [x] Clarity contract templates
- [ ] Full DEX API integration (Alex, Velar, Bitflow)
- [ ] Complete stacking contract implementation
- [ ] Multi-wallet support
- [ ] Enhanced portfolio tracking
- [ ] LP position management

### Phase 3 (Planned)
- [ ] Contract deployment from Claude
- [ ] Lending/borrowing (Zest, Granite)
- [ ] sBTC operations
- [ ] Hardware wallet support
- [ ] Automated trading strategies
- [ ] Price alerts and notifications
- [ ] Advanced analytics and reporting

### Future Considerations
- Mobile app integration
- Multi-signature wallet support
- Governance participation tools
- NFT marketplace integration
- Cross-chain bridge operations

---

## Support & Community

### Getting Help
- **GitHub Issues:** [Report bugs and request features](https://github.com/kai-builder/stacksagent-mcp/issues)
- **Documentation:** [Stacks Docs](https://docs.stacks.co)
- **MCP Protocol:** [Model Context Protocol](https://modelcontextprotocol.io)
- **Stacks Discord:** [Join the community](https://discord.gg/stacks)

### Contributing
Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests (when infrastructure is ready)
5. Submit a pull request

**Guidelines:**
- Follow existing code style
- Include error handling
- Don't expose private keys or sensitive data
- Ensure cross-platform compatibility (macOS, Windows, Linux)

---

## FAQ

**Q: Is my wallet secure?**
A: Yes. Your private keys are encrypted with AES-256-GCM and stored locally. They never leave your machine. Always use a strong password and backup your mnemonic phrase.

**Q: What networks are supported?**
A: Both mainnet and testnet. Configure via `STACKS_NETWORK` environment variable.

**Q: Can I use multiple wallets?**
A: Currently, only single wallet support. Multi-wallet is planned for Phase 2.

**Q: Do I need STX for gas fees?**
A: Yes. All transactions on Stacks require STX for gas fees. Keep some STX in your wallet.

**Q: What's the minimum for stacking?**
A: Direct stacking requires 100,000 STX. Pool delegation has much lower minimums (often just 1 STX).

**Q: Are DEX integrations fully functional?**
A: Currently using mock quotes for MVP. Full Alex/Velar/Bitflow integration coming in Phase 2.

**Q: Can I deploy contracts from Claude?**
A: Contract templates are available now. Full deployment integration coming soon.

**Q: Is this open source?**
A: Yes! MIT License. Contributions welcome.

**Q: What about hardware wallets?**
A: Not yet supported. Planned for Phase 3.

---

## Technical Details

### Built With
- **MCP SDK** - [@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/sdk)
- **Stacks.js** - [@stacks/transactions](https://github.com/hirosystems/stacks.js)
- **BNS SDK** - [bns-v2-sdk](https://github.com/mechanismHQ/bns-v2)
- **Bitflow SDK** - [@bitflowlabs/core-sdk](https://github.com/bitflowlabs/core-sdk)
- **TypeScript** - Type-safe development
- **Zod** - Runtime type validation

### Architecture
```
┌─────────────────┐
│  Claude Desktop │
└────────┬────────┘
         │ MCP Protocol (stdio)
┌────────▼────────┐
│  Stacks MCP     │
│  Server         │
├─────────────────┤
│ • Wallet Service│
│ • DEX Service   │
│ • Stacking Svc  │
│ • BNS Service   │
│ • Portfolio Svc │
└────────┬────────┘
         │
┌────────▼────────┐
│  Stacks         │
│  Blockchain     │
│  (via Hiro API) │
└─────────────────┘
```

### MCP Tools Summary

**Total Tools: 30+**

| Category | Tool Count | Key Features |
|----------|-----------|--------------|
| Wallet | 7 | Create, import, balance, lock/unlock |
| Market & DEX | 7 | Prices, quotes, swaps, liquidity |
| Stacking | 4 | Info, status, stack, delegate |
| Portfolio | 3 | Summary, transactions, history |
| BNS | 7 | Resolve, lookup, ownership, validation |
| Contracts | ~5 | Templates, validation, analysis |

---

## License

MIT License - See [LICENSE](LICENSE) file for details.

---

## Disclaimer

**This software is provided "as is" without warranty of any kind.**

- Use at your own risk
- Always verify transactions before confirming
- Never share your private keys or mnemonic phrase
- Not financial advice - DYOR (Do Your Own Research)
- Test with small amounts first
- Understand the risks of DeFi and cryptocurrency

---

## Acknowledgments

Built with ❤️ for the Stacks community by developers who believe in Bitcoin-secured smart contracts.

**Special Thanks:**
- Anthropic for Claude and the MCP protocol
- Hiro Systems for Stacks.js and infrastructure
- The Stacks Foundation
- Alex, Velar, and Bitflow teams
- The open-source community

---

## Quick Links

- **Repository:** [github.com/kai-builder/stacksagent-mcp](https://github.com/kai-builder/stacksagent-mcp)
- **Documentation:** [README.md](README.md)
- **Issues:** [GitHub Issues](https://github.com/kai-builder/stacksagent-mcp/issues)
- **Stacks:** [stacks.co](https://www.stacks.co)
- **Claude:** [claude.ai](https://claude.ai)

---

**Ready to get started?** Install Stacks Agent MCP and transform Claude into your personal Stacks blockchain assistant!

```bash
npm install -g stacksagent-mcp
```

Then configure Claude Desktop and start chatting with your blockchain. 🚀
