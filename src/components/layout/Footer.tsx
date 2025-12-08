import Image from 'next/image';
import table from '../../assets/graphics/table-2.svg';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.table}>
        <h2 className={styles.table_title}>Balance</h2>
        <Image src={table} width={410} height={123} alt='table-image' />
        <span className={styles.table_inputToken}>T</span>
        <p className={styles.table_sum}>999 999.99</p>
      </div>
    </footer>
  )
}
