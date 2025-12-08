import styles from './Token.module.scss';

interface TokenProps {
  position: 'absolute' | 'relative' | 'fixed' | 'sticky';
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export default function Token({ position, top, left, right, bottom }: TokenProps) {
  return (
    <span
      style={{ position, top, left, right, bottom }}
      className={styles.inputToken}>
      T
    </span>
  );
}