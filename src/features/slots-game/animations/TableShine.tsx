'use client';
import { motion } from 'framer-motion';

import styles from '../TableFixed.module.scss';

export default function TableShine() {
  return (
    <motion.div
      className={styles.container_shine}
      animate={{ x: ['-50%', '100%', '-50%'] }}
      transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity }}
    />
  );
}
