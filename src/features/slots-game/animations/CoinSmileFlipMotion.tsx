"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function CoinSmileFlipMotion(
  { className, children, tilt = 0 }: PropsWithChildren<{ className?: string; tilt?: number }>
) {
  return (
    <motion.div
      className={className}
      style={{ rotate: tilt }}
      animate={{ rotateY: [0, 180, 360], y: [0, -3, 0, 3, 0] }}
      transition={{ rotateY: { duration: 0.9, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.5 }, y: { duration: 3, ease: "easeInOut", repeat: Infinity } }}
    >
      {children}
    </motion.div>
  );
}
