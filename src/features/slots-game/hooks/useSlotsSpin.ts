'use client';
import { useEffect, useRef } from 'react';
import { useSlotsStore } from '@/features/slots-game/store/slotsStore';
import { REELS_COUNT, SYMBOLS_COUNT, SPIN_SPEED_MS, REEL_DELAYS_MS } from '@/shared/constants/slots-game';

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

  const sanitizeBet = (value: number | null | undefined): number =>
    value && value > 0 ? Math.floor(value) : 0;

  const clearIntervals = () => {
    intervalsRef.current.forEach((id) => clearInterval(id));
    intervalsRef.current = [];
  };

  useEffect(() => clearIntervals, []);

  const finalizePayout = (finalReels: number[]) => {
    setSpinning(false);

    const counts: Record<number, number> = {};
    finalReels.forEach((value) => {
      counts[value] = (counts[value] || 0) + 1;
    });

    const sanitizedBet = sanitizeBet(bet);
    let win = 0;

    if (Object.values(counts).some((count) => count === REELS_COUNT)) {
      win = sanitizedBet * 10;
    } else if (Object.values(counts).some((count) => count === REELS_COUNT - 1)) {
      win = sanitizedBet * 5;
    } else if (
      finalReels.some((value, index) => index < finalReels.length - 1 && value === finalReels[index + 1])
    ) {
      win = sanitizedBet * 2;
    }

    if (win > 0) {
      setBalance((prev) => prev + win);
      setModal({ type: 'win', amount: win });
    } else {
      setModal({ type: 'lose', amount: sanitizedBet });
    }

    window.setTimeout(clearModal, 2500);
  };

  const spin = () => {
    if (spinning) return;

    clearIntervals();

    const sanitizedBet = sanitizeBet(bet);
    if (sanitizedBet < 1 || sanitizedBet > balance) return;

    setBalance((prev) => prev - sanitizedBet);
    setSpinning(true);

    const current = [...reelIndexes];
    const finalReels = [...current];

    for (let index = 0; index < REELS_COUNT; index++) {
      let idx = current[index];

      const intervalId = window.setInterval(() => {
        idx = (idx + 1) % SYMBOLS_COUNT;

        setReelIndexes((prev) => {
          const next = [...prev];
          next[index] = idx;
          return next;
        });
      }, SPIN_SPEED_MS);

      intervalsRef.current[index] = intervalId;

      window.setTimeout(() => {
        clearInterval(intervalId);

        const finalIndex = Math.floor(Math.random() * SYMBOLS_COUNT);
        finalReels[index] = finalIndex;

        setReelIndexes((prev) => {
          const next = [...prev];
          next[index] = finalIndex;
          return next;
        });

        if (index === REELS_COUNT - 1) {
          finalizePayout(finalReels);
        }
      }, REEL_DELAYS_MS[index]);
    }
  };

  return { spin, spinning };
}
