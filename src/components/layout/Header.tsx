import Image from 'next/image';
import tableBackground from '../../assets/graphics/table-1.svg';

import styles from './Header.module.scss';
import CloudMotion from './animations/CloudMotion';
import TableMotion from './animations/TableMotion';

export default function Header() {
  return (
    <header className={styles.container}>
      <CloudMotion className={styles.cloud} />
      <TableMotion className={styles.table}>
        <Image className={styles.tableBackground} src={tableBackground} alt="table" width={340} height={69} />
        <h1 className={styles.table_title}>Tokio Slots</h1>
      </TableMotion>
    </header>
  );
}
