import Image from 'next/image';
import baseSlots from '../../assets/graphics/slots-game/slots.svg';
import leftEye from '../../assets/graphics/slots-game/left-eye.svg';
import rightEye from '../../assets/graphics/slots-game/right-eye.svg';
import smile from '../../assets/graphics/slots-game/smile.svg';
import emotion from '../../assets/graphics/slots-game/emotion.svg';
import handleDizactive from '../../assets/graphics/slots-game/handle-turnOff.svg';
import handleSupport from '../../assets/graphics/slots-game/handle-support-1.svg';
import leftHand from '../../assets/graphics/slots-game/left-hand.svg';
import rightHand from '../../assets/graphics/slots-game/right-hand.svg';
import foots from '../../assets/graphics/slots-game/foots.svg';
import EyeMotion from './animations/EyeMotion';
import SmileMotion from './animations/SmileMotion';
import BlushMotion from './animations/BlushMotion';
import HandWaveMotion from './animations/HandWaveMotion';
import HandSwayMotion from './animations/HandSwayMotion';
import FootsMotion from './animations/FootsMotion';
import styles from './SlotsMachine.module.scss';


export default function SlotsMachine() {
  return (
    <div className={styles.container}>
      <Image className={styles.base} src={baseSlots} width={427} height={226} alt="slots-machine" />
        <EyeMotion className={styles.eyeLeft}><Image src={leftEye} width={48} height={46} alt="left-eye" /></EyeMotion>
        <EyeMotion className={styles.eyeRight}><Image src={rightEye} width={48} height={46} alt="right-eye" /></EyeMotion>
        <SmileMotion className={styles.smile}><Image src={smile} width={25} height={13} alt="smile" /></SmileMotion>
        <Image className={styles.handle} src={handleDizactive} width={30} height={120} alt="handle" />
        <BlushMotion className={styles.emotionLeft}><Image src={emotion} width={44} height={6} alt="emotion-left" /></BlushMotion>
        <BlushMotion className={styles.emotionRight}><Image src={emotion} width={44} height={6} alt="emotion-right" /></BlushMotion>
        <Image className={styles.handleSupport} src={handleSupport} width={26} height={118} alt="handle-support" />
        <HandWaveMotion className={styles.handLeft}><Image src={leftHand} width={56} height={51} alt="left-hand" /></HandWaveMotion>
        <HandSwayMotion className={styles.handRight}><Image src={rightHand} width={56} height={51} alt="right-hand" /></HandSwayMotion>
        <FootsMotion className={styles.foots}><Image src={foots} width={370} height={33} alt="foots" /></FootsMotion>
    </div>
  )
}
