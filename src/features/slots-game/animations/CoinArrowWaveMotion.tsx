"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function CoinArrowWaveMotion({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: [0, 8, -8, 0], x: [0, 2, -2, 0] }}
      transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}

