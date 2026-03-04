import BlackButton from "../../reusedComponents/BlackButton";
import styles from "./DashboardAccountDetails.module.css";

export default function DashboardAccountDetails() {
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="text" placeholder="Display Name" />
      <input type="email" placeholder="Email Address" defaultValue={null} />

      <h2>Password Change</h2>
      <input type="password" placeholder="Current password (leave blank to leave unchanged)" />
      <input type="password" placeholder="New password (leave blank to leave unchanged)" />
      <input type="password" placeholder="Confirm new password" />

      <BlackButton className={styles.submitBtn}>Save Changes</BlackButton>
      {/* <button type="submit" className={styles.submitBtn}>
        Save Changes
      </button> */}
    </form>
  );
}

