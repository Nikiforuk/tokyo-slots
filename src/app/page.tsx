import Slots from '@/features/slots/Slots';
import styles from './page.module.scss';

export default function Home() {
  return (
    <section className={styles.main}>
      <Slots />
    </section>
  );
}
