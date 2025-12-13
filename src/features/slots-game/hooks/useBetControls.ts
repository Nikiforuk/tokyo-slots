'use client';
import { useSlotsStore } from '@/features/slots-game/store/slotsStore';

export default function useBetControls() {
  const { balance, bet, setBet } = useSlotsStore();

  const setBetFromInput = (value: string) => {
    if (value === '') {
      setBet(null);
      return;
    }

    const cleaned = value.replace(/[^0-9]/g, '');
    if (cleaned === '') return;

    const num = parseInt(cleaned, 10);
    setBet(Math.min(Math.max(1, num), balance));
  };

  const incBet = () => {
    if (bet) {
      setBet(Math.min(bet + 5, balance));
    }
  };

  const decBet = () => {
    if (bet) {
      setBet(Math.max(1, bet - 5));
    }
  };

  return { balance, bet, setBetFromInput, incBet, decBet };
}
