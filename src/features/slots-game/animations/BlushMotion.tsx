'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

export default function BlushMotion({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      animate={{ opacity: [0, 0, 1, 0, 0], y: [0, -0.5, -1, -0.5, 0] }}
      transition={{
        duration: 6,
        ease: 'easeInOut',
        repeat: Infinity,
        times: [0, 0.45, 0.6, 0.8, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
