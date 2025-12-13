'use client';
import { STORAGE_KEY } from '@/shared/constants/slots-game';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SlotsState = {
  balance: number;
  bet: number | null;
  reelIndexes: number[];
  spinning: boolean;
  setBalance: (balance: number | ((prev: number) => number)) => void;
  setBet: (bet: number | null) => void;
  setReelIndexes: (indexes: number[] | ((prev: number[]) => number[])) => void;
  setSpinning: (spinning: boolean) => void;
  topUp: (amount: number) => void;
  modal: { type: 'win' | 'lose' | null; amount: number };
  setModal: (modal: { type: 'win' | 'lose' | null; amount: number }) => void;
  clearModal: () => void;
};

export const useSlotsStore = create<SlotsState>()(
  persist(
    (set) => ({
      balance: 1000,
      bet: null,
      reelIndexes: [0, 0, 0, 0],
      spinning: false,
      modal: { type: null, amount: 0 },
      setBalance: (balance) =>
        set((slot) => ({
          balance: typeof balance === 'function' ? balance(slot.balance) : balance,
        })),
      setBet: (bet) => set(() => ({ bet })),
      setReelIndexes: (indexes) =>
        set((slot) => ({
          reelIndexes: typeof indexes === 'function' ? indexes(slot.reelIndexes) : indexes,
        })),
      setSpinning: (spinning) => set(() => ({ spinning })),
      topUp: (amount) =>
        set((slot) => ({ balance: slot.balance + Math.max(0, Math.floor(amount)) })),
      setModal: (modal) => set(() => ({ modal })),
      clearModal: () => set(() => ({ modal: { type: null, amount: 0 } })),
    }),
    {
      name: STORAGE_KEY,
      partialize: (state) => ({
        balance: state.balance,
        bet: state.bet,
        reelIndexes: state.reelIndexes,
      }),
    },
  ),
);
