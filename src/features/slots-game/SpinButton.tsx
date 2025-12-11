'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import border1Img from '@/assets/graphics/spin-button/spin-border-1.svg';
import border2Img from '@/assets/graphics/spin-button/spin-border-2.svg';
import capsuleImg from '@/assets/graphics/spin-button/spin-capsule.svg';

import styles from './SpinButton.module.scss';

interface SpinButtonProps {
  onClick?: () => void;
}

export default function SpinButton({ onClick }: SpinButtonProps) {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            onClick?.();
          }}
          aria-label="Spin"
        >
          <Image
            className={styles.border1}
            src={border1Img}
            alt="spin-base"
            width={238}
            height={160}
          />
          <Image
            className={styles.border2}
            src={border2Img}
            alt="spin-base"
            width={260}
            height={160}
          />
          <motion.div
            className={styles.capsuleWrap}
            whileTap={{ y: 16, scaleY: 0.94, zIndex: 8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Image
              className={styles.capsuleImg}
              src={capsuleImg}
              alt="spin-top"
              width={250}
              height={160}
            />
          </motion.div>
        </button>
      </div>
    </div>
  );
}
