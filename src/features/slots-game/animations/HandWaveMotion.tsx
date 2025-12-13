'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

export default function HandWaveMotion({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: '10% 10%' }}
      animate={{
        y: [0, -120, -120, -120, -120, 0],
        rotate: [0, 0, 40, -200, 40, 0],
      }}
      transition={{
        duration: 8,
        ease: 'easeInOut',
        repeat: Infinity,
        times: [0, 0.25, 0.45, 0.6, 0.8, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
