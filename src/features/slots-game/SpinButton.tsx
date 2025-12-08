"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './SpinButton.module.scss';
import borders from '../../assets/graphics/spin-button/spin-borders.svg';
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
      <Image className={styles.borders} src={borders} alt="spin-base" width={250} height={140} />
      <motion.div
        className={styles.capsuleWrap}
        whileTap={{ y: 12, scaleY: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Image className={styles.capsuleImg} src={capsule} alt="spin-top" width={250} height={145} />
      </motion.div>
    </button>
  );
}
