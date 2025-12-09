import Image from 'next/image';

import Token from '@/components/ui/Token';

import UmbrellaSpin from './animations/UmbrellaSpin';
import styles from './ModalWin.module.scss';
import happyFace from '../../assets/graphics/happy-face.svg';
import tableWin from '../../assets/graphics/table-modal.svg';
interface ModalWinProps {
  amount: number;
}

export default function ModalWin({ amount }: ModalWinProps) {
  return (
    <div className={styles.overlay}>
      <UmbrellaSpin />
      <div className={styles.container}>
        <Image src={tableWin} width={302} height={236} alt="table-win" />
        <h4 className={styles.title}>You win!!!</h4>
        <Image
          className={styles.happyFace}
          src={happyFace}
          width={57}
          height={51}
          alt="table-win"
        />
        <Token position="absolute" top="65%" left="50px" />
        <p className={styles.sumWin}>
          +
          {new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(amount)}
        </p>
      </div>
    </div>
  );
}
