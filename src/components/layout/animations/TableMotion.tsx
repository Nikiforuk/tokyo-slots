'use client';
import type { PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

export default function TableMotion({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}
