'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { blushConfig, bodyPartsConfig, faceConfig } from '@/shared/constants/slots-game';

import styles from './SlotsMachine.module.scss';
import handleSupportImg from '../../assets/graphics/slots-game/handle-support-1.svg';
import handleInactiveImg from '../../assets/graphics/slots-game/handle-turnOff.svg';
import handleActiveImg from '../../assets/graphics/slots-game/handle-turnOn.svg';
import cherryImg from '../../assets/icons/cherry.svg';
import diamondImg from '../../assets/icons/diamond.svg';
import lemonImg from '../../assets/icons/lemon.svg';
import sevenImg from '../../assets/icons/seven.svg';

const SYMBOLS = [sevenImg, diamondImg, cherryImg, lemonImg];

interface SlotsMachineProps {
  reelIndexes: number[];
  spinning: boolean;
}

export default function SlotsMachine({ reelIndexes, spinning }: SlotsMachineProps) {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <div className={styles.base}>
          <div className={styles.reels} aria-live={spinning ? 'polite' : 'off'}>
            {reelIndexes.map((symbolIndex, i) => (
              <div key={i} className={styles.reelWindow}>
                <motion.div
                  animate={spinning ? { y: [0, -8, 0, 8, 0] } : { y: 0 }}
                  transition={
                    spinning
                      ? { duration: 0.6, ease: 'easeInOut', repeat: Infinity }
                      : { duration: 0 }
                  }
                >
                  <Image
                    src={SYMBOLS[symbolIndex % SYMBOLS.length]}
                    width={60}
                    height={60}
                    className={styles.reelIcons}
                    alt="symbol"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        {faceConfig.map((part) => (
          <part.Motion key={part.className} className={styles[part.className]}>
            <Image src={part.img} width={part.width} height={part.height} alt={part.alt} />
          </part.Motion>
        ))}
        {spinning ? (
          <Image
            className={styles.handleActive}
            src={handleActiveImg}
            width={30}
            height={120}
            alt="handle"
          />
        ) : (
          <Image
            className={styles.handleInactive}
            src={handleInactiveImg}
            width={30}
            height={120}
            alt="handle"
          />
        )}
        {blushConfig.map((emotion) => (
          <emotion.Motion key={emotion.className} className={styles[emotion.className]}>
            <Image
              src={emotion.img}
              width={emotion.width}
              height={emotion.height}
              alt={emotion.alt}
            />
          </emotion.Motion>
        ))}
        <Image
          className={styles.handleSupport}
          src={handleSupportImg}
          width={26}
          height={118}
          alt="handle-support"
        />
        {bodyPartsConfig.map((part) => (
          <part.Motion key={part.className} className={styles[part.className]}>
            <Image src={part.img} width={part.width} height={part.height} alt={part.alt} />
          </part.Motion>
        ))}
      </div>
    </div>
  );
}
