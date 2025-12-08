import styles from './AdjustInput.module.scss';

interface AdjustInputProps {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
}

export default function AdjustInput({id, name, type, placeholder}: AdjustInputProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.forwardShadow} />
      <span className={styles.inputToken}>T</span>
      <input
        id={id}
        name={name}
        type={type}
        inputMode="decimal"
        className={styles.input}
        aria-label="Bet amount"
        placeholder={placeholder}
      />
    </div>
  )
}
