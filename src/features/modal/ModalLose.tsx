import Image from 'next/image';

import tableLoseImg from '@/assets/graphics/table-modal.svg';
import Token from '@/components/ui/Token';
import { formatCurrency } from '@/shared/utils/formatNumber';

import styles from './ModalLose.module.scss';
interface ModalLoseProps {
  amount: number;
}

export default function ModalLose({ amount }: ModalLoseProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <Image
          className={styles.table}
          src={tableLoseImg}
          width={302}
          height={236}
          alt="table-win"
        />
        <h4 className={styles.title}>
          You <span className={styles.title_lose}>Lose</span>
        </h4>
        <Token position="absolute" top="65%" left="50px" />
        <p className={styles.sumWin}>-{formatCurrency(amount)}</p>
      </div>
    </div>
  );
}
