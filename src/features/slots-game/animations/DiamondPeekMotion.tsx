"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function DiamondPeekMotion({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      animate={{ x: [20, 0, 20], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}

