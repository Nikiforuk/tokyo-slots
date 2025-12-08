import AdjustButton from '@/components/ui/AdjustButton';
import styles from './SlotsForm.module.scss';
import AdjustInput from '@/components/ui/AdjustInput';

export default function SlotsForm() {
  return (
    <form
      className={styles.container}
      noValidate
      autoComplete="off" 
    >
      <label className={styles.label} htmlFor="bet">Place a bid</label>
      <div className={styles.elements}>
        <AdjustButton text='+' />
        <AdjustInput />
        <AdjustButton text='-' />
      </div>
    </form>
  );
}
