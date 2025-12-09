'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

export default function CoinSmileMotion({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.15, 1], y: [0, -1, 0] }}
      transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}
