import Slots from '@/features/slots-game/Slots';
import styles from './page.module.scss';

export default function Home() {
  return (
    <section className={styles.main}>
      <Slots />
    </section>
  );
}
