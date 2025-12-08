'use client';

import { motion } from 'framer-motion';
import styles from './AdjustButton.module.scss';

interface AdjustButtonProps {
  text?: string;
}

export default function AdjustButton({ text }: AdjustButtonProps) {
  return (
    <button type='button' className={styles.base}>
      <motion.div
        className={styles.base_button}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {text}
      </motion.div>
    </button>
  );
}
