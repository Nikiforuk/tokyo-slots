import styles from './AdjustInput.module.scss';
import Token from './Token';

interface AdjustInputProps {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export default function AdjustInput({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  disabled,
}: AdjustInputProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.forwardShadow} />
      <Token position="absolute" top="50%" left="18px" />
      <input
        id={id}
        name={name}
        type={type}
        inputMode="decimal"
        className={styles.input}
        aria-label="Bet amount"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
}
