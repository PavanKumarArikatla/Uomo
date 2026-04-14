import { useContext } from "react";
import styles from "./DashboardWishlist.module.css";
import { StylesContext } from "../../contexts/StylesContext";



export default function DashboardWishlist() {

  const { wishlist, deleteItemFromWishlist} = useContext(StylesContext)

  return (
    <section className={styles.grid}>
     {wishlist.length > 0 ? (
      wishlist.map((item) => (
        <article key={item.name} className={styles.card}>
          <button type="button" className={styles.removeBtn} onClick={() => deleteItemFromWishlist(item.id)}>
            x
          </button>
          <div className={styles.art}>
            <img src={item.image} alt={item.style}/>
          </div>
          <p className={styles.type}>Product</p>
          <p className={styles.name}>{item.style}</p>
          <div className={styles.priceRow}>
            <p className={styles.price}>${Math.round(item.price)}</p>
          </div>
        </article>
      ))
    ):(
      <p>Your wishlist is empty</p>
    )}
    </section>
  );
}

