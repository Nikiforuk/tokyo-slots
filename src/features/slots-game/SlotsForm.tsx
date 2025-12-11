import AdjustButton from '@/components/ui/AdjustButton';
import AdjustInput from '@/components/ui/AdjustInput';

import styles from './SlotsForm.module.scss';

interface SlotsFormProps {
  balance: number;
  bet: number;
  onBetChange: (value: string) => void;
  onIncrementBet: () => void;
  onDecrementBet: () => void;
  spinning: boolean;
}

export default function SlotsForm({
  bet,
  onBetChange,
  onIncrementBet,
  onDecrementBet,
  spinning,
}: SlotsFormProps) {
  return (
    <form className={styles.container} noValidate autoComplete="off">
      <label className={styles.label} htmlFor="bet">
        Place a bid
      </label>
      <div className={styles.flexBox}>
        <div className={styles.elements}>
          <AdjustButton text="+" onClick={onIncrementBet} />
          <AdjustInput
            id="bet"
            type="text"
            placeholder="99 999.99"
            value={bet}
            onChange={onBetChange}
            disabled={spinning}
          />
          <AdjustButton text="-" onClick={onDecrementBet} />
        </div>
      </div>
    </form>
  );
}
