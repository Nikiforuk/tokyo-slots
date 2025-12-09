'use client';
import { useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './CoinButton.module.scss';
import coinImage from '../../assets/graphics/decorations/coin.svg';

interface CoinButtonProps {
  icon: string;
  iconWidth?: number;
  iconHeight?: number;
  position: 'absolute' | 'relative' | 'fixed' | 'sticky';
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  reverse?: boolean;
}

export default function CoinButton({
  icon,
  iconWidth,
  iconHeight,
  position,
  top,
  left,
  right,
  bottom,
  reverse,
}: CoinButtonProps) {
  const [delay] = useState(() => Math.floor(Math.random() * 4) + 2);
  return (
    <motion.button
      style={{ position, top, left, right, bottom }}
      type="button"
      className={styles.button}
      animate={{
        rotateY: [0, 180, 360],
        y: [0, -6, 0, 6, 0],
      }}
      transition={{
        rotateY: { duration: 0.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: delay },
        y: { duration: 2.8, ease: 'easeInOut', repeat: Infinity },
      }}
    >
      <Image src={coinImage} width={77} height={77} alt="coin-image" />
      <Image
        className={styles.secondIcon}
        style={reverse ? { transform: 'scaleX(-1)' } : undefined}
        src={icon}
        width={iconWidth}
        height={iconHeight}
        alt="arrow"
      />
    </motion.button>
  );
}
