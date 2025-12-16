import { StackingInfo, StackingStatus } from '../types/index.js';
import { StacksApiClient } from './stacks-api.js';
import { MIN_STACKING_AMOUNT } from '../utils/constants.js';

export class StackingService {
  private apiClient: StacksApiClient;
  private network: 'mainnet' | 'testnet';

  constructor(network: 'mainnet' | 'testnet' = 'mainnet') {
    this.network = network;
    this.apiClient = new StacksApiClient(network);
  }

  /**
   * Gets current stacking/PoX information
   */
  async getStackingInfo(): Promise<StackingInfo> {
    try {
      const poxInfo = await this.apiClient.getPoxInfo();

      // Calculate next cycle start
      const currentBurnHeight = poxInfo.current_burnchain_block_height || 0;
      const rewardCycleLength = poxInfo.reward_cycle_length || 2100;
      const firstBurnHeight = poxInfo.first_burnchain_block_height || 666050;

      const currentCycle = Math.floor((currentBurnHeight - firstBurnHeight) / rewardCycleLength);
      const nextCycleStartHeight = firstBurnHeight + (currentCycle + 1) * rewardCycleLength;
      const blocksUntilNextCycle = nextCycleStartHeight - currentBurnHeight;

      // Estimate minutes until next cycle (Bitcoin blocks ~10 min average)
      const minutesUntilNextCycle = blocksUntilNextCycle * 10;

      return {
        currentCycle,
        nextCycleStart: Date.now() + minutesUntilNextCycle * 60 * 1000,
        minStackingAmount: (MIN_STACKING_AMOUNT / 1000000).toString(),
        estimatedApy: 8.0, // This would be calculated from historical data
      };
    } catch (error: any) {
      throw new Error(`Failed to fetch stacking info: ${error.message}`);
    }
  }

  /**
   * Gets stacking status for an address
   */
  async getStackingStatus(address: string): Promise<StackingStatus> {
    try {
      // Query the PoX contract to check if address is stacking
      // In a real implementation, this would call:
      // pox.get-stacker-info or pox.get-delegation-info

      const poxInfo = await this.apiClient.getPoxInfo();

      // Mock implementation - in production, query actual contract
      const isStacking = false; // Would check actual stacking status

      const status: StackingStatus = {
        address,
        isStacking,
      };

      if (isStacking) {
        // If stacking, add additional info
        status.stackedAmount = '100000'; // In STX
        status.unlockHeight = 850000; // Block height
        status.poxAddress = 'bc1q...'; // Bitcoin address
        status.cyclesRemaining = 12;
        status.estimatedRewards = '0.05'; // In BTC
      }

      return status;
    } catch (error: any) {
      throw new Error(`Failed to fetch stacking status: ${error.message}`);
    }
  }

  /**
   * Stacks STX for PoX rewards
   */
  async stackStx(
    amount: string,
    cycles: number,
    poxAddress: string,
    privateKey: string,
    senderAddress: string
  ): Promise<string> {
    try {
      // Validate amount
      const amountMicroStx = parseFloat(amount) * 1000000;
      if (amountMicroStx < MIN_STACKING_AMOUNT) {
        throw new Error(`Minimum stacking amount is ${MIN_STACKING_AMOUNT / 1000000} STX`);
      }

      // Validate cycles (typically 1-12)
      if (cycles < 1 || cycles > 12) {
        throw new Error('Cycles must be between 1 and 12');
      }

      // In a real implementation, this would:
      // 1. Build contract call to pox.stack-stx
      // 2. Include post-conditions
      // 3. Sign and broadcast

      // Mock transaction
      const mockTxId = `0x${Buffer.from(Date.now().toString()).toString('hex').padStart(64, '0')}`;

      return mockTxId;
    } catch (error: any) {
      throw new Error(`Failed to stack STX: ${error.message}`);
    }
  }

  /**
   * Delegates STX to a stacking pool
   */
  async delegateStx(
    amount: string,
    delegateTo: string,
    privateKey: string,
    senderAddress: string
  ): Promise<string> {
    try {
      // Validate amount
      const amountMicroStx = parseFloat(amount) * 1000000;

      // In a real implementation, this would:
      // 1. Build contract call to pox.delegate-stx
      // 2. Include post-conditions
      // 3. Sign and broadcast

      // Mock transaction
      const mockTxId = `0x${Buffer.from(Date.now().toString()).toString('hex').padStart(64, '0')}`;

      return mockTxId;
    } catch (error: any) {
      throw new Error(`Failed to delegate STX: ${error.message}`);
    }
  }

  /**
   * Revokes stacking delegation
   */
  async revokeDelegation(privateKey: string, senderAddress: string): Promise<string> {
    try {
      // In a real implementation, this would call pox.revoke-delegate-stx
      const mockTxId = `0x${Buffer.from(Date.now().toString()).toString('hex').padStart(64, '0')}`;
      return mockTxId;
    } catch (error: any) {
      throw new Error(`Failed to revoke delegation: ${error.message}`);
    }
  }

  /**
   * Calculates estimated rewards for stacking
   */
  calculateEstimatedRewards(amount: string, cycles: number, apy: number): string {
    const amountNum = parseFloat(amount);
    const yearlyReward = amountNum * (apy / 100);
    const cycleReward = yearlyReward / (365 / 15); // Approximate 15-day cycles
    const totalReward = cycleReward * cycles;

    return totalReward.toFixed(8);
  }
}
