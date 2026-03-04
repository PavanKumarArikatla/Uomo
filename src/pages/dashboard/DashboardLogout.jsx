import styles from "./DashboardLogout.module.css";

export default function DashboardLogout() {
  return (
    <section className={styles.panel}>
      <p className={styles.message}>
        You are still logged in. Click the logout action in your auth flow to
        end this session.
      </p>
    </section>
  );
}

