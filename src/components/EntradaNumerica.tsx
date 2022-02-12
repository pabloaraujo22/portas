import styles from '../styles/EntradaNumerica.module.css';
interface EntradaNumericaProps {
  text: string;
  value: number;
  onChange: (novoValor: number) => void;
}
export default function EntradaNumerica(props: EntradaNumericaProps) {
  const inc = () => props.onChange(props.value + 1);
  const dec = () => props.onChange(props.value - 1);
  return (
    <div className={styles.entradaNumerica}>
      <div className={styles.text}>{props.text}</div>
      <div className={styles.value}>{props.value}</div>
      <div className={styles.botoes}>
        <button className={styles.btn} onClick={inc}>
          +
        </button>
        <button className={styles.btn} onClick={dec}>
          -
        </button>
      </div>
    </div>
  );
}
