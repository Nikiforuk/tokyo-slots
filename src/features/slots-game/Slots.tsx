import styles from './Slots.module.scss';
import SlotsForm from './SlotsForm';
import SlotsMachine from './SlotsMachine';
import Decorations from './Decorations';
import ModalLose from '../modal/ModalLose';

export default function Slots() {
  return (
    <div className={styles.container}>
      <Decorations />
      <SlotsMachine />
      <SlotsForm />
      <div className={styles.clouGreenBackground} />
      <div className={styles.cloudWhiteBackground} />
      <div className={styles.cloudLeft} />
      <div className={styles.cloudRight} />
      <ModalLose />
    </div>
  )
}
