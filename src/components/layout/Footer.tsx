import Image from 'next/image';
import table from '../../assets/graphics/table-2.svg';
import styles from './Footer.module.scss';
import FooterTitle from './animations/FooterTitle';
import FooterShine from './animations/FooterShine';
import Token from '../ui/Token';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.table}>
        <FooterTitle />
        <Image src={table} width={410} height={123} alt='table-image' />
        <FooterShine />
        <Token position='absolute' top='50%' left='20%' right='51%' />
        <p className={styles.table_sum}>999 999.99</p>
      </div>
    </footer>
  )
}