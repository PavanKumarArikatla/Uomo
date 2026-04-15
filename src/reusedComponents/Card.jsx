import { Link, useLocation } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ card, addItems }) {

  const location = useLocation()
  const discount = card.price*(card.discount/100);
  const price = (card.price - discount).toFixed(2);
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link to={
          location.pathname === "/"
            ? `/${card.style}`
            : `${location.pathname}/${card.style}`
        } state={card}>
          <img src={card.image} alt={card.style} className={styles.image}/>
        </Link>
        <button className={styles.cartButton} onClick={() => addItems(card)}>
          Add to cart
        </button>        
      </div>
      <article className={styles.category}>{card.style}</article>
      <p className={styles.nav}>{card.type}</p>
      <div className={styles.price}>
        {card.discount 
        ? <nav className="flex gap-3">
            <h6 className="line-through opacity-70">${card.price}</h6> 
            <h6 className="text-red-600">${price}</h6>
          </nav>
        : `$${card.price}`}
      </div>
    </div>
  );
}
