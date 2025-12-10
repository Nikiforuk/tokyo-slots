'use client';
import { motion } from 'framer-motion';

import styles from '../Slots.module.scss';

export default function TableShine() {
  return (
    <motion.div
      className={styles.tableFixed_shine}
      animate={{ x: ['-50%', '100%', '-50%'] }}
      transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity }}
    />
  );
}
