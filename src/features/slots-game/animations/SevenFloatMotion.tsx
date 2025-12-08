"use client";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function SevenFloatMotion(
  {
    className,
    children,
    delay = 0,
    up = 18,
    down = 24,
    duration = 3.2,
  }: PropsWithChildren<{ className?: string; delay?: number; up?: number; down?: number; duration?: number }>
) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -up, down, 0] }}
      transition={{ duration, ease: "easeInOut", repeat: Infinity, delay }}
    >
      {children}
    </motion.div>
  );
}
