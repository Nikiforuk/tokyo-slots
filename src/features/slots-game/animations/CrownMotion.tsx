'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

export default function CrownMotion({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: [0, 360, 0, -360, 0] }}
      transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}
