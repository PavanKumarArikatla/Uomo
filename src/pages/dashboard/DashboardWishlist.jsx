import { useContext } from "react";
import styles from "./DashboardWishlist.module.css";
import { StylesContext } from "../../contexts/StylesContext";
import { useNavigate } from "react-router-dom";




export default function DashboardWishlist() {

  const { wishlist, deleteItemFromWishlist, addItemsToCart } = useContext(StylesContext)
  const navigate = useNavigate();

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
            <button className={styles.saveBtn} type="button" onClick={() => {
              setTimeout(() => {
                 addItemsToCart(item);           
              }, 1500);}}>
            Add to cart
          </button>
          </div>
          <p className={styles.type}>{item.style}</p>
          <p className={styles.name}>{item.type}</p>
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

