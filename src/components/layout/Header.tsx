import Image from 'next/image';

import CloudMotion from './animations/CloudMotion';
import TableMotion from './animations/TableMotion';
import styles from './Header.module.scss';
import arrowImg from '../../assets/graphics/decorations/arrow.svg';
import tableBackground from '../../assets/graphics/table-1.svg';
import CoinButton from '../ui/CoinButton';

export default function Header() {
  return (
    <header className={styles.container}>
      <CloudMotion className={styles.cloud} />
      <CoinButton
        icon={arrowImg}
        iconWidth={14}
        iconHeight={23}
        position="absolute"
        top="10px"
        left="10px"
      />
      <CoinButton
        icon={arrowImg}
        iconWidth={14}
        iconHeight={23}
        position="absolute"
        top="10px"
        right="10px"
        reverse
      />
      <TableMotion className={styles.table}>
        <Image
          className={styles.tableBackground}
          src={tableBackground}
          alt="table"
          width={340}
          height={69}
        />
        <h1 className={styles.table_title}>Tokio Slots</h1>
      </TableMotion>
    </header>
  );
}
