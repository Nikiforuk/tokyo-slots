'use client';

import Image from 'next/image';

import sicretImg from '@/assets/decorations/sicret.svg';
import table from '@/assets/graphics/table-2.svg';
import CoinButton from '@/components/ui/CoinButton';
import Token from '@/components/ui/Token';
import { useSlotsStore } from '@/features/slots-game/store/slotsStore';
import { backgroundDecorations } from '@/shared/constants/slots-game';
import { formatCurrency } from '@/shared/utils/formatNumber';

import TableShine from './animations/TableShine';
import Decorations from './Decorations';
import useBetControls from './hooks/useBetControls';
import useSlotsSpin from './hooks/useSlotsSpin';
import styles from './Slots.module.scss';
import SlotsForm from './SlotsForm';
import SlotsMachine from './SlotsMachine';
import ModalLose from '../modal/ModalLose';
import ModalWin from '../modal/ModalWin';
import TableTitle from './animations/TableTitle';

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
        right="40%"
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
          onSpin={spin}
          spinning={spinning}
        />
        {modal?.type === 'win' && <ModalWin amount={modal.amount} />}
        {modal?.type === 'lose' && <ModalLose amount={modal.amount} />}
        {backgroundDecorations.map((bg) => (
          <div key={bg.id} className={styles[bg.className]} />
        ))}
        <div className={styles.tableFixed}>
          <TableTitle />
          <Image src={table} width={410} height={123} alt="table-graphics" />
          <TableShine />
          <Token position="absolute" top="50%" left="20%" right="51%" />
          <p className={styles.tableFixed_sum}>{formatCurrency(balance)}</p>
        </div>
      </div>
    </div>
  );
}
