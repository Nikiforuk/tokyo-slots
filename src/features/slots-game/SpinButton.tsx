"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './SpinButton.module.scss';
import border2 from '../../assets/graphics/spin-button/spin-border-1.svg';
import border1 from '../../assets/graphics/spin-button/spin-border-2.svg';
import capsule from '../../assets/graphics/spin-button/spin-capsule.svg';

interface SpinButtonProps {
  onClick?: () => void;
}

export default function SpinButton({ onClick }: SpinButtonProps) {
  return (
    <button
      className={styles.container}
      type="button"
      onClick={() => {
        onClick?.();
      }}
      aria-label="Spin"
    >
      <Image className={styles.border1} src={border1} alt="spin-base" width={240} height={160} />
      <Image className={styles.border2} src={border2} alt="spin-base" width={250} height={160} />
      <motion.div
        className={styles.capsuleWrap}
        whileTap={{ y: 12, scaleY: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Image className={styles.capsuleImg} src={capsule} alt="spin-top" width={240} height={160} />
      </motion.div>
    </button>
  );
}
