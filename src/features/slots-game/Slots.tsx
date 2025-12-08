import styles from './Slots.module.scss';
import SlotsForm from './SlotsForm';
import SlotsMachine from './SlotsMachine';

export default function Slots() {
  return (
    <div className={styles.container}>
      <SlotsMachine />
      <SlotsForm />
    </div>
  )
}
