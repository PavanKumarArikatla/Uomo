import styles from "./AddItemOrderButton.module.css";

export default function AddItemOrderButton({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
}
