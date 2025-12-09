"use client";
import Image from 'next/image';
import table from '../../assets/graphics/table-2.svg';
import styles from './Footer.module.scss';
import FooterTitle from './animations/FooterTitle';
import FooterShine from './animations/FooterShine';
import Token from '../ui/Token';
import { useSlotsStore } from '@/features/slots-game/store/slotsStore';

export default function Footer() {
  const balance = useSlotsStore((s) => s.balance);
  const formatted = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(balance);
  return (
    <footer className={styles.container}>
      <div className={styles.table}>
        <FooterTitle />
        <Image src={table} width={410} height={123} alt='table-graphics' />
        <FooterShine />
        <Token position='absolute' top='50%' left='20%' right='51%' />
        <p className={styles.table_sum}>{formatted}</p>
      </div>
    </footer>
  )
}
