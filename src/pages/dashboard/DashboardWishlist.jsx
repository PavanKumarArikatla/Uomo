import styles from "./DashboardWishlist.module.css";

const wishlistItems = [
  { name: "Colorful Jacket", price: "$89.99" },
  { name: "Shirt In Botanical Cheetah Print", price: "$62.99" },
  { name: "Cotton Jersey T-Shirt", price: "$47.99" },
];

export default function DashboardWishlist() {
  return (
    <section className={styles.grid}>
      {wishlistItems.map((item) => (
        <article key={item.name} className={styles.card}>
          <button type="button" className={styles.removeBtn}>
            x
          </button>
          <div className={styles.art}>
            <div className={styles.circle} />
            <div className={styles.triangle} />
          </div>
          <p className={styles.type}>Dresses</p>
          <p className={styles.name}>{item.name}</p>
          <div className={styles.priceRow}>
            <p className={styles.price}>{item.price}</p>
            <button type="button" className={styles.heartBtn}>
              ♡
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}

