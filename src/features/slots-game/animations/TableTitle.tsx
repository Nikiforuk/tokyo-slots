'use client';
import { motion } from 'framer-motion';

import styles from '../Slots.module.scss';

export default function TableTitle() {
  return (
    <motion.h2
      className={styles.tableFixed_title}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{ duration: 2.8, ease: 'easeInOut', repeat: Infinity }}
    >
      Balance
    </motion.h2>
  );
}
