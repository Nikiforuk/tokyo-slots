'use client';
import { motion } from 'framer-motion';

import styles from '../Footer.module.scss';

export default function FooterShine() {
  return (
    <motion.div
      className={styles.table_shine}
      animate={{ x: ['-50%', '100%', '-50%'] }}
      transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity }}
    />
  );
}
