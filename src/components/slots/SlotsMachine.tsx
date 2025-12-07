import Image from 'next/image';
import styles from './SlotsMachine.module.scss';
import baseSlots from '../../assets/graphics/slots-game/slots.svg';
import leftEye from '../../assets/graphics/slots-game/left-eye.svg';
import rightEye from '../../assets/graphics/slots-game/right-eye.svg';
import smile from '../../assets/graphics/slots-game/smile.svg';
import emotion from '../../assets/graphics/slots-game/emotion.svg';
import leftHand from '../../assets/graphics/slots-game/left-hand.svg';
import rightHand from '../../assets/graphics/slots-game/right-hand.svg';
import foots from '../../assets/graphics/slots-game/foots.svg';

export default function SlotsMachine() {
  return (
    <div className={styles.container}>
      <Image className={styles.base} src={baseSlots} alt="slots" width={430} height={260} />

      <Image className={styles.eyeLeft} src={leftEye} alt="left-eye" width={42} height={42} />
      <Image className={styles.eyeRight} src={rightEye} alt="right-eye" width={42} height={42} />

      <Image className={styles.smile} src={smile} alt="smile" width={40} height={20} />

      <Image className={styles.emotionLeft} src={emotion} alt="emotion-left" width={60} height={18} />
      <Image className={styles.emotionRight} src={emotion} alt="emotion-right" width={60} height={18} />

      <Image className={styles.handLeft} src={leftHand} alt="left-hand" width={60} height={80} />
      <Image className={styles.handRight} src={rightHand} alt="right-hand" width={60} height={80} />

      <Image className={styles.foots} src={foots} alt="foots" width={220} height={50} />
    </div>
  );
}

