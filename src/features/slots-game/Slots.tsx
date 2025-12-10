'use client';
import Image from 'next/image';

import Token from '@/components/ui/Token';
import { useSlotsStore } from '@/features/slots-game/store/slotsStore';

import TableShine from './animations/TableShine';
import Decorations from './Decorations';
import useBetControls from './hooks/useBetControls';
import useSlotsSpin from './hooks/useSlotsSpin';
import styles from './Slots.module.scss';
import SlotsForm from './SlotsForm';
import SlotsMachine from './SlotsMachine';
import table from '../../assets/graphics/table-2.svg';
import ModalLose from '../modal/ModalLose';
import ModalWin from '../modal/ModalWin';
import TableTitle from './animations/TableTitle';

export default function Slots() {
  const { balance, bet, reelIndexes, spinning, modal } = useSlotsStore();
  const { spin } = useSlotsSpin();
  const { setBetFromInput, incBet, decBet } = useBetControls();
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(balance);

  return (
    <div className={styles.container}>
      <Decorations />
      <SlotsMachine reelIndexes={reelIndexes} spinning={spinning} />
      <SlotsForm
        balance={balance}
        bet={bet}
        onBetChange={setBetFromInput}
        onIncrementBet={incBet}
        onDecrementBet={decBet}
        onSpin={spin}
        spinning={spinning}
      />
      {modal?.type === 'win' && <ModalWin amount={modal.amount} />}
      {modal?.type === 'lose' && <ModalLose amount={modal.amount} />}
      <div className={styles.clouGreenBackground} />
      <div className={styles.cloudWhiteBackground} />
      <div className={styles.cloudLeft} />
      <div className={styles.cloudRight} />
      <div className={styles.city} />
      <div className={styles.tableFixed}>
        <TableTitle />
        <Image src={table} width={410} height={123} alt="table-graphics" />
        <TableShine />
        <Token position="absolute" top="50%" left="20%" right="51%" />
        <p className={styles.tableFixed_sum}>{formatted}</p>
      </div>
    </div>
  );
}
