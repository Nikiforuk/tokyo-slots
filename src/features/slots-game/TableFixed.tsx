import Image from 'next/image';

import table from '@/assets/graphics/table-2.svg';
import Token from '@/components/ui/Token';
import { formatCurrency } from '@/shared/utils/formatNumber';

import TableShine from './animations/TableShine';
import TableTitle from './animations/TableTitle';
import SpinButton from './SpinButton';
import { useSlotsStore } from './store/slotsStore';
import styles from './TableFixed.module.scss';

interface TableFixedProps {
  onSpin: () => void;
}

export default function TableFixed({ onSpin }: TableFixedProps) {
  const { balance } = useSlotsStore();
  return (
    <>
      <div>
        <div className={styles.spin}>
          <SpinButton onClick={onSpin} />
        </div>
      </div>
      <div className={styles.container}>
        <TableTitle />
        <Image src={table} width={410} height={123} alt="table-graphics" />
        <TableShine />
        <Token position="absolute" top="52%" left="86px" right="86px" />
        <p className={styles.container_sum}>{formatCurrency(balance)}</p>
      </div>
    </>
  );
}
