import styles from "./DashboardAddresses.module.css";

export default function DashboardAddresses() {
  return (
    <section>
      <p className={styles.note}>
        The following addresses will be used on the checkout page by default.
      </p>

      <div className={styles.grid}>
        <article className={styles.card}>
          <div className={styles.head}>
            <h2>Billing Address</h2>
            <button type="button">Edit</button>
          </div>
          <p>Daniel Robinson</p>
          <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
          <p>United States</p>
          <p className={styles.spacer}>sale@uomo.com</p>
          <p>+1 246-345-0695</p>
        </article>

        <article className={styles.card}>
          <div className={styles.head}>
            <h2>Shipping Address</h2>
            <button type="button">Edit</button>
          </div>
          <p>Daniel Robinson</p>
          <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
          <p>United States</p>
          <p className={styles.spacer}>sale@uomo.com</p>
          <p>+1 246-345-0695</p>
        </article>
      </div>
    </section>
  );
}

