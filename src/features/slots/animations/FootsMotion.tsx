"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function FootsMotion({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: "50% 0%" }}
      animate={{ scaleY: [1, 1, 1.08, 1], y: [0, 1, -1, 0] }}
      transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}

