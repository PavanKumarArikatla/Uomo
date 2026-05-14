import { useContext } from "react";
import styles from "./DashboardAddresses.module.css";
import { StylesContext } from "../../contexts/StylesContext";

export default function DashboardAddresses() {
  const { currentUser } = useContext(StylesContext)
  return (
    <section>
      <p className={styles.note}>
        The following addresses will be used on the checkout page by default.
      </p>

      <div className={styles.grid}>
        {currentUser.address.map((address, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.head}>
              <h2>Billing Address</h2>
              <button type="button">Edit</button>
            </div>
            <p>{currentUser.username}</p>
            <p>{address}</p>
            <p>{currentUser.country}</p>
            <p className={styles.spacer}>sale@uomo.com</p>
            <p>+1 246-345-0695</p>
          </article>
        ))}
      </div>
    </section>
  );
}

