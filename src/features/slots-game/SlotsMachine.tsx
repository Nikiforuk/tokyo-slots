'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import BlushMotion from './animations/BlushMotion';
import EyeMotion from './animations/EyeMotion';
import FootsMotion from './animations/FootsMotion';
import HandSwayMotion from './animations/HandSwayMotion';
import HandWaveMotion from './animations/HandWaveMotion';
import SmileMotion from './animations/SmileMotion';
import styles from './SlotsMachine.module.scss';
import emotion from '../../assets/graphics/slots-game/emotion.svg';
import foots from '../../assets/graphics/slots-game/foots.svg';
import handleSupport from '../../assets/graphics/slots-game/handle-support-1.svg';
import handleDizactive from '../../assets/graphics/slots-game/handle-turnOff.svg';
import handleActive from '../../assets/graphics/slots-game/handle-turnOn.svg';
import leftEye from '../../assets/graphics/slots-game/left-eye.svg';
import leftHand from '../../assets/graphics/slots-game/left-hand.svg';
import rightEye from '../../assets/graphics/slots-game/right-eye.svg';
import rightHand from '../../assets/graphics/slots-game/right-hand.svg';
import smile from '../../assets/graphics/slots-game/smile.svg';
import cherry from '../../assets/icons/cherry.svg';
import diamond from '../../assets/icons/diamond.svg';
import lemon from '../../assets/icons/lemon.svg';
import seven from '../../assets/icons/seven.svg';

const SYMBOLS = [seven, diamond, cherry, lemon];

interface SlotsMachineProps {
  reelIndexes: number[];
  spinning: boolean;
}

export default function SlotsMachine({ reelIndexes, spinning }: SlotsMachineProps) {
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        <div className={styles.reels} aria-live={spinning ? 'polite' : 'off'}>
          {[0, 1, 2, 3].map((i) => (
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
                  src={SYMBOLS[reelIndexes[i] % SYMBOLS.length]}
                  width={60}
                  height={60}
                  alt="symbol"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <EyeMotion className={styles.eyeLeft}>
        <Image src={leftEye} width={48} height={46} alt="left-eye" />
      </EyeMotion>
      <EyeMotion className={styles.eyeRight}>
        <Image src={rightEye} width={48} height={46} alt="right-eye" />
      </EyeMotion>
      <SmileMotion className={styles.smile}>
        <Image src={smile} width={25} height={13} alt="smile" />
      </SmileMotion>
      {spinning ? (
        <Image
          className={styles.handleActive}
          src={handleActive}
          width={30}
          height={120}
          alt="handle"
        />
      ) : (
        <Image
          className={styles.handleDizactive}
          src={handleDizactive}
          width={30}
          height={120}
          alt="handle"
        />
      )}
      <BlushMotion className={styles.emotionLeft}>
        <Image src={emotion} width={44} height={6} alt="emotion-left" />
      </BlushMotion>
      <BlushMotion className={styles.emotionRight}>
        <Image src={emotion} width={44} height={6} alt="emotion-right" />
      </BlushMotion>
      <Image
        className={styles.handleSupport}
        src={handleSupport}
        width={26}
        height={118}
        alt="handle-support"
      />
      <HandWaveMotion className={styles.handLeft}>
        <Image src={leftHand} width={56} height={51} alt="left-hand" />
      </HandWaveMotion>
      <HandSwayMotion className={styles.handRight}>
        <Image src={rightHand} width={56} height={51} alt="right-hand" />
      </HandSwayMotion>
      <FootsMotion className={styles.foots}>
        <Image src={foots} width={370} height={33} alt="foots" />
      </FootsMotion>
    </div>
  );
}
