import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ card, addItems, smallImage }) {
  const discount = card.price*(card.discount/100);
  const price = (card.price - discount).toFixed(2);
  console.log(smallImage)
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link to="/item" state={card}>
          <img src={card.image} alt={card.style} className={styles.image}/>
        </Link>
        <button className={styles.cartButton} onClick={() => addItems(card)}>
          Add to cart
        </button>        
      </div>
      <article className="absolute left-6 bottom-11 opacity-50 text-xs">Dresses</article>
      <p className={styles.nav}>{card.style}</p>
      <div className={styles.price}>{card.discount ? 
        <nav className="flex gap-3"> <h6 className="line-through opacity-70">${card.price}</h6> <h6 className="text-red-600">${price}</h6> </nav>
        :`$${card.price}`}
      </div>
    </div>
  );
}
