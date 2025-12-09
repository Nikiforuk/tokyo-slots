import Image from 'next/image';

import Token from '@/components/ui/Token';

import styles from './ModalLose.module.scss';
import tableLose from '../../assets/graphics/table-modal.svg';

export default function ModalLose() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <Image className={styles.table} src={tableLose} width={302} height={236} alt="table-win" />
        <h4 className={styles.title}>
          You <span className={styles.title_lose}>Lose</span>
        </h4>
        <Token position="absolute" top="65%" left="50px" />
        <p className={styles.sumWin}>+999 999.99</p>
      </div>
    </div>
  );
}
