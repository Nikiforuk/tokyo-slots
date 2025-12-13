'use client';
import Image from 'next/image';

import { decorationsConfig } from '@/shared/constants/slots-game';

import styles from './Decorations.module.scss';

export default function Decorations() {
  return (
    <>
      {decorationsConfig.map((item) => {
        const Motion = item.Motion;

        return (
          <Motion key={item.id} className={styles[item.className]} delay={item.delay}>
            <Image src={item.img} width={item.width} height={item.height} alt={item.alt} />
          </Motion>
        );
      })}
    </>
  );
}
