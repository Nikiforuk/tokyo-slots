"use client";
import { useSlotsStore } from '@/features/slots-game/store/slotsStore';

export default function useBetControls() {
  const { balance, bet, setBet } = useSlotsStore();

  const setBetFromInput = (val: string) => {
    const cleaned = val.replace(/[^0-9.]/g, '');
    const num = Math.floor(parseFloat(cleaned || '0'));
    if (Number.isNaN(num)) return;
    setBet(Math.max(1, num));
  };

  const incBet = () => {
    setBet(Math.min(bet + 5, balance));
  };

  const decBet = () => {
    setBet(Math.max(1, bet - 5));
  };


  return { balance, bet, setBetFromInput, incBet, decBet };
}
