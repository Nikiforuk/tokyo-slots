import React from 'react';

import Image from 'next/image';

import tableBackground from '@/assets/graphics/table-1.svg';
import { coinBtns } from '@/shared/constants/slots-game';

import CloudMotion from './animations/CloudMotion';
import TableMotion from './animations/TableMotion';
import styles from './Header.module.scss';
import CoinButton from '../ui/CoinButton';

export default function Header() {
  return (
    <header className={styles.container}>
      <CloudMotion className={styles.cloud} />
      {coinBtns.map((btn, i) => (
        <React.Fragment key={i}>
          <CoinButton
            icon={btn.icon}
            iconWidth={btn.iconWidth}
            iconHeight={btn.iconHeight}
            position={btn.position}
            top={btn.top}
            left={btn.left}
            right={btn.right}
            reverse={btn.reverse}
          />
        </React.Fragment>
      ))}
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
