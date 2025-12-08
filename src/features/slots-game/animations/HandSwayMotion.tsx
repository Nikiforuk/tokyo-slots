"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function HandSwayMotion({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: "90% 10%" }}
      animate={{ rotate: [0, 2, -10, 50, 0], y: [0, -1, 0.5, -1, 0] }}
      transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}

