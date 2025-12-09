"use client";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SlotsState = {
  balance: number;
  bet: number;
  reelIndexes: number[];
  spinning: boolean;
  setBalance: (balance: number | ((prev: number) => number)) => void;
  setBet: (bet: number) => void;
  setReelIndexes: (indexes: number[] | ((prev: number[]) => number[])) => void;
  setSpinning: (spinning: boolean) => void;
};

export const useSlotsStore = create<SlotsState>()(
  persist(
    (set) => ({
      balance: 1000,
      bet: 10,
      reelIndexes: [0, 0, 0, 0],
      spinning: false,
      setBalance: (balance) => set((s) => ({ balance: typeof balance === 'function' ? (balance as any)(s.balance) : balance })),
      setBet: (bet) => set(() => ({ bet })),
      setReelIndexes: (indexes) => set((s) => ({ reelIndexes: typeof indexes === 'function' ? (indexes as any)(s.reelIndexes) : indexes })),
      setSpinning: (spinning) => set(() => ({ spinning })),
    }),
    {
      name: 'tokyo-slots-storage',
      partialize: (state) => ({ balance: state.balance, bet: state.bet, reelIndexes: state.reelIndexes }),
    },
  ),
);

