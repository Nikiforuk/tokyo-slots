'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

export default function EyeMotion({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      animate={{ x: [0, 1.5, -1, 0], y: [0, -0.5, 0.5, 0] }}
      transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
    >
      <motion.div
        style={{ transformOrigin: 'center center' }}
        animate={{ scaleY: [1, 1, 0.08, 1, 1], y: [0, 0, -0.4, 0, 0] }}
        transition={{
          duration: 4.5,
          ease: 'easeInOut',
          repeat: Infinity,
          times: [0, 0.92, 0.95, 0.97, 1],
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
