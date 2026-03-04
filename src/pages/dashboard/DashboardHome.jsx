import { Link } from "react-router-dom";
import styles from "./DashboardHome.module.css";

export default function DashboardHome() {
  return (
    <section className={styles.panel}>
      <p className={styles.line}>
        Hello <b>alifin58</b> (not <b>alifin58</b>?{" "}
        <button type="button" className={styles.inlineBtn}>
          Log out
        </button>
        )
      </p>
      <p className={styles.line}>
        From your account dashboard you can view your{" "}
        <Link to="/dashboard/orders" className={styles.inlineLink}>
          recent orders
        </Link>
        , manage your{" "}
        <Link to="/dashboard/addresses" className={styles.inlineLink}>
          shipping and billing addresses
        </Link>
        , and{" "}
        <Link to="/dashboard/account-details" className={styles.inlineLink}>
          edit your password and account details
        </Link>
        .
      </p>
    </section>
  );
}

