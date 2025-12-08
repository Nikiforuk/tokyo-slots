import AdjustButton from '@/components/ui/AdjustButton';
import styles from './SlotsForm.module.scss';
import AdjustInput from '@/components/ui/AdjustInput';
import SpinButton from './SpinButton';

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
        <AdjustInput id='bet' type='text' placeholder='99 999.99'   />
        <AdjustButton text='-' />
      </div>
      <div className={styles.spin}>
        <SpinButton />
      </div>
    </form>
  );
}
