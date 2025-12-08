import styles from './AdjustButton.module.scss';

interface AdjustButtonProps {
  text?: string;
}

export default function AdjustButton({text}: AdjustButtonProps) {
  return (
    <button className={styles.button} type='button'>
      {text}
    </button>
  )
}
