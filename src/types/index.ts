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
