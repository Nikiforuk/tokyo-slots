'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import umbrellaImg from '@/assets/images/umbrella.png';

import styles from '../ModalWin.module.scss';

export default function UmbrellaSpin() {
  return (
    <motion.div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 1001,
      }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration: 3 }}
    >
      <Image
        className={styles.umbrella}
        src={umbrellaImg}
        alt="umbrella"
        width={2000}
        height={2000}
      />
    </motion.div>
  );
}
