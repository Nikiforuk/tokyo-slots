"use client";
import { useRef } from 'react';
import { useSlotsStore } from '@/features/slots-game/store/slotsStore';

export default function useSlotsSpin() {
  const { balance, bet, reelIndexes, setBalance, setReelIndexes, setSpinning, spinning } = useSlotsStore();
  const intervalsRef = useRef<number[]>([]);

  const sanitizeBet = (value: number) => Math.max(1, Math.floor(value));

  const finalizePayout = (finalReels: number[]) => {
    setSpinning(false);
    const counts: Record<number, number> = {};
    finalReels.forEach((v) => { counts[v] = (counts[v] || 0) + 1; });
    const b = sanitizeBet(bet);
    let win = 0;
    if (Object.values(counts).some((c) => c === 4)) {
      win = b * 10;
    } else if (Object.values(counts).some((c) => c === 3)) {
      win = b * 5;
    } else {
      const hasAdjacentPair = finalReels.some((v, i) => i < finalReels.length - 1 && v === finalReels[i + 1]);
      if (hasAdjacentPair) win = b * 2;
    }
    if (win > 0) setBalance((prev) => prev + win);
  };

  const spin = () => {
    if (spinning) return;
    const b = sanitizeBet(bet);
    if (b > balance) return;
    setBalance((prev) => prev - b);
    setSpinning(true);

    const symbolsCount = 4;
    const speed = 90;
    const delays = [1200, 1600, 2000, 2400];
    intervalsRef.current.forEach((id) => clearInterval(id));
    intervalsRef.current = [];

    const current = [...reelIndexes];
    for (let i = 0; i < 4; i++) {
      let idx = current[i];
      const id = window.setInterval(() => {
        idx = (idx + 1) % symbolsCount;
        setReelIndexes((prev) => {
          const next = [...prev];
          next[i] = idx;
          return next;
        });
      }, speed);
      intervalsRef.current[i] = id;

      window.setTimeout(() => {
        clearInterval(id);
        const finalIndex = Math.floor(Math.random() * symbolsCount);
        setReelIndexes((prev) => {
          const next = [...prev];
          next[i] = finalIndex;
          return next;
        });
        if (i === 3) {
          window.setTimeout(() => finalizePayout(useSlotsStore.getState().reelIndexes), 120);
        }
      }, delays[i]);
    }
  };

  return { spin, spinning };
}

