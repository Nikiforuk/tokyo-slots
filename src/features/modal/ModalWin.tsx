import Image from 'next/image';

import happyFace from '@/assets/graphics/happy-face.svg';
import tableWinImg from '@/assets/graphics/table-modal.svg';
import Token from '@/components/ui/Token';
import { formatCurrency } from '@/shared/utils/formatNumber';

import UmbrellaSpin from './animations/UmbrellaSpin';
import styles from './ModalWin.module.scss';
interface ModalWinProps {
  amount: number;
}

export default function ModalWin({ amount }: ModalWinProps) {
  return (
    <div className={styles.overlay}>
      <UmbrellaSpin />
      <div className={styles.container}>
        <Image src={tableWinImg} width={302} height={236} alt="table-win" />
        <h4 className={styles.title}>You win!!!</h4>
        <Image
          className={styles.happyFace}
          src={happyFace}
          width={57}
          height={51}
          alt="table-win"
        />
        <Token position="absolute" top="65%" left="50px" />
        <p className={styles.sumWin}>+{formatCurrency(amount)}</p>
      </div>
    </div>
  );
}
