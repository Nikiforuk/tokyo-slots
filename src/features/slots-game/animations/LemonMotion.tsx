'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

export default function LemonMotion({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.08, 1],
        rotate: [0, -10, 10, 0],
        x: [0, 2, -2, 0],
        y: [0, -2, 0, 2, 0],
      }}
      transition={{ duration: 3.2, ease: 'easeInOut', repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}
