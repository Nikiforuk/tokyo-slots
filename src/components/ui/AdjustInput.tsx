import styles from './AdjustInput.module.scss';

interface AdjustInputProps {
  
}

export default function AdjustInput() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.forwardShadow} />
      <span className={styles.inputToken}>T</span>
      <input
        id="bet"
        name="bet"
        type="text"
        inputMode="decimal"
        defaultValue="99 999.99"
        className={styles.input}
        aria-label="Bet amount"
      />
    </div>
  )
}
