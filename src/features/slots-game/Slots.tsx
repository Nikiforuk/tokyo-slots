'use client';

import sicretImg from '@/assets/decorations/sicret.svg';
import CoinButton from '@/components/ui/CoinButton';
import { useSlotsStore } from '@/features/slots-game/store/slotsStore';
import { backgroundDecorations } from '@/shared/constants/slots-game';

import Decorations from './Decorations';
import useBetControls from './hooks/useBetControls';
import useSlotsSpin from './hooks/useSlotsSpin';
import styles from './Slots.module.scss';
import SlotsForm from './SlotsForm';
import SlotsMachine from './SlotsMachine';
import TableFixed from './TableFixed';
import ModalLose from '../modal/ModalLose';
import ModalWin from '../modal/ModalWin';

export default function Slots() {
  const { balance, bet, reelIndexes, spinning, modal, topUp } = useSlotsStore();
  const { spin } = useSlotsSpin();
  const { setBetFromInput, incBet, decBet } = useBetControls();

  const handleClickOnSicretBonus = () => {
    if (balance <= 0) topUp(1000);
  };

  return (
    <div className={styles.container}>
      <CoinButton
        icon={sicretImg}
        iconWidth={14}
        iconHeight={23}
        position="absolute"
        top="90%"
        left="15%"
        onClick={handleClickOnSicretBonus}
      />
      <div className={styles.bg}>
        <Decorations />
        <SlotsMachine reelIndexes={reelIndexes} spinning={spinning} />
        <SlotsForm
          balance={balance}
          bet={bet}
          onBetChange={setBetFromInput}
          onIncrementBet={incBet}
          onDecrementBet={decBet}
          spinning={spinning}
        />
        {modal?.type === 'win' && <ModalWin amount={modal.amount} />}
        {modal?.type === 'lose' && <ModalLose amount={modal.amount} />}
        {backgroundDecorations.map((bg) => (
          <div key={bg.id} className={styles[bg.className]} />
        ))}
        <TableFixed onSpin={spin} />
      </div>
    </div>
  );
}
