'use client';
import { useRef } from 'react';

import { useSlotsStore } from '@/features/slots-game/store/slotsStore';

export default function useSlotsSpin() {
  const {
    balance,
    bet,
    reelIndexes,
    setBalance,
    setReelIndexes,
    setSpinning,
    spinning,
    setModal,
    clearModal,
  } = useSlotsStore();
  const intervalsRef = useRef<number[]>([]);

  const sanitizeBet = (value: number) => Math.max(1, Math.floor(value));

  const finalizePayout = (finalReels: number[]) => {
    setSpinning(false);
    const counts: Record<number, number> = {};
    finalReels.forEach((value) => {
      counts[value] = (counts[value] || 0) + 1;
    });
    const sanitizedBet = sanitizeBet(bet);
    let win = 0;
    if (Object.values(counts).some((count) => count === 4)) {
      win = sanitizedBet * 10;
    } else if (Object.values(counts).some((count) => count === 3)) {
      win = sanitizedBet * 5;
    } else {
      const hasAdjacentPair = finalReels.some(
        (value, index) => index < finalReels.length - 1 && value === finalReels[index + 1],
      );
      if (hasAdjacentPair) win = sanitizedBet * 2;
    }
    if (win > 0) {
      setBalance((prev) => prev + win);
      setModal({ type: 'win', amount: win });
    } else {
      setModal({ type: 'lose', amount: sanitizedBet });
    }
    window.setTimeout(() => clearModal(), 2500);
  };

  const spin = () => {
    if (spinning) return;
    const sanitizedBet = sanitizeBet(bet);
    if (sanitizedBet > balance) return;
    setBalance((prev) => prev - sanitizedBet);
    setSpinning(true);

    const symbolsCount = 4;
    const speed = 90;
    const delays = [1200, 1600, 2000, 2400];
    intervalsRef.current.forEach((id) => clearInterval(id));
    intervalsRef.current = [];

    const current = [...reelIndexes];
    for (let index = 0; index < 4; index++) {
      let idx = current[index];
      const id = window.setInterval(() => {
        idx = (idx + 1) % symbolsCount;
        setReelIndexes((prev) => {
          const next = [...prev];
          next[index] = idx;
          return next;
        });
      }, speed);
      intervalsRef.current[index] = id;

      window.setTimeout(() => {
        clearInterval(id);
        const finalIndex = Math.floor(Math.random() * symbolsCount);
        setReelIndexes((prev) => {
          const next = [...prev];
          next[index] = finalIndex;
          return next;
        });
        if (index === 3) {
          window.setTimeout(() => finalizePayout(useSlotsStore.getState().reelIndexes), 120);
        }
      }, delays[index]);
    }
  };

  return { spin, spinning };
}
