import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ card, addItems }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link to="/item" state={card}>
          <img src={null} alt={card.style} className={styles.image} />
        </Link>
        <button className={styles.cartButton} onClick={() => addItems(card)}>
          Add to cart
        </button>        
      </div>
      <b>{card.style}</b>
        <pre>${card.price}</pre>
    </div>
  );
}
