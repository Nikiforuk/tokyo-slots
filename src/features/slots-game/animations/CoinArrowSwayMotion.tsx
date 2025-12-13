'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

export default function CoinArrowSwayMotion({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -4, 0, 4, 0], rotate: [0, -6, 6, 0] }}
      transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}
