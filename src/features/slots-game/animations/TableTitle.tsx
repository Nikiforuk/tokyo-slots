'use client';
import { motion } from 'framer-motion';

import styles from '../TableFixed.module.scss';

export default function TableTitle() {
  return (
    <motion.h2
      className={styles.container_title}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity }}
    >
      Balance
    </motion.h2>
  );
}
