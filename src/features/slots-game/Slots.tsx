'use client';
import { useSlotsStore } from '@/features/slots-game/store/slotsStore';

import Decorations from './Decorations';
import useBetControls from './hooks/useBetControls';
import useSlotsSpin from './hooks/useSlotsSpin';
import styles from './Slots.module.scss';
import SlotsForm from './SlotsForm';
import SlotsMachine from './SlotsMachine';
import ModalLose from '../modal/ModalLose';
import ModalWin from '../modal/ModalWin';

export default function Slots() {
  const { balance, bet, reelIndexes, spinning, modal } = useSlotsStore();
  const { spin } = useSlotsSpin();
  const { setBetFromInput, incBet, decBet } = useBetControls();

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
    </div>
  );
}
