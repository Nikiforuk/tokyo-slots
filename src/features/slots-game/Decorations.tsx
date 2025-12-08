"use client";
import Image from 'next/image';
import CrownMotion from './animations/CrownMotion';
import CoinSmileMotion from './animations/CoinSmileMotion';
import CoinArrowWaveMotion from './animations/CoinArrowWaveMotion';
import DiamondPeekMotion from './animations/DiamondPeekMotion';
import CoinArrowSwayMotion from './animations/CoinArrowSwayMotion';
import CherryPeekMotion from './animations/CherryPeekMotion';
import SevenFloatMotion from './animations/SevenFloatMotion';
import LemonMotion from './animations/LemonMotion';
import CoinSmileFlipMotion from './animations/CoinSmileFlipMotion';
import arrowImg from '../../assets/graphics/decorations/arrow.svg';
import crown from '../../assets/graphics/decorations/crown.svg';
import coinSmile1 from '../../assets/graphics/decorations/coin-smile-1.svg';
import coinArrow1 from '../../assets/graphics/decorations/coin-arrows-1.svg'
import diamond from '../../assets/graphics/decorations/diamond.svg';
import cherry from '../../assets/graphics/decorations/cherry.svg';
import seven from '../../assets/graphics/decorations/seven.svg';
import lemon from '../../assets/graphics/decorations/lemon.svg';
import CoinButton from '@/components/ui/CoinButton';
import styles from './Decorations.module.scss';

export default function Decorations() {
  return (
    <>
      <CoinButton icon={arrowImg} iconWidth={14} iconHeight={23} position='absolute' top='80px' left='30%' />
      <CoinButton icon={arrowImg} iconWidth={14} iconHeight={23} position='absolute' top='80px' right='30%' reverse />
      <CrownMotion className={styles.crown}>
        <Image src={crown} width={41} height={37} alt='crown-image' />
      </CrownMotion>
      <CoinSmileMotion className={styles.coinSmile1}>
        <Image src={coinSmile1} width={32} height={31} alt='coin-smile-image' />
      </CoinSmileMotion>
      <CoinArrowWaveMotion className={styles.coinArrow1}>
        <Image src={coinArrow1} width={36} height={36} alt='coin-arrow-image' />
      </CoinArrowWaveMotion>
      <DiamondPeekMotion className={styles.diamond}>
        <Image src={diamond} width={50} height={50} alt='diamond-image' />
      </DiamondPeekMotion>
      <CoinArrowSwayMotion className={styles.coinArrow2}>
        <Image src={coinArrow1} width={36} height={36} alt='coin-arrow-image' />
      </CoinArrowSwayMotion>
      <CherryPeekMotion className={styles.cherry}>
        <Image src={cherry} width={54} height={96} alt='cherry-image' />
      </CherryPeekMotion>
      <CoinSmileFlipMotion className={styles.coinSmile2}>
        <Image src={coinSmile1} width={111} height={110} alt='coin-smile-image' />
      </CoinSmileFlipMotion>
      <SevenFloatMotion className={styles.seven1}>
        <Image src={seven} width={35} height={32} alt='seven-image' />
      </SevenFloatMotion>
      <SevenFloatMotion className={styles.seven2} delay={0.6}>
        <Image src={seven} width={35} height={32} alt='seven-image' />
      </SevenFloatMotion>
      <LemonMotion className={styles.lemon}>
        <Image src={lemon} width={58} height={50} alt='lemon-image' />
      </LemonMotion>
    </>
  )
}
