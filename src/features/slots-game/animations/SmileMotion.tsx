'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

export default function SmileMotion({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: 'center center' }}
      animate={{
        scaleX: [1, 1.08, 0.95, 1.12, 1],
        scaleY: [1, 0.9, 1.06, 0.78, 1],
        rotate: [0, 0.6, -0.4, -2.0, 0],
        y: [0, -0.4, 0.3, -0.9, 0],
      }}
      transition={{
        duration: 6,
        ease: 'easeInOut',
        repeat: Infinity,
        times: [0, 0.3, 0.5, 0.8, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
