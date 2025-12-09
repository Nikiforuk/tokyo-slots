'use client';
import { motion } from 'framer-motion';

export default function CloudMotion({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ backgroundPositionX: [-120, 120, -120] }}
      transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
    />
  );
}
