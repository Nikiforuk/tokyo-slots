"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function CherryPeekMotion({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      animate={{ x: [-30, 0, -30] }}
      transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}

