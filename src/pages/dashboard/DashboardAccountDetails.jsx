import { useContext } from "react";
import BlackButton from "../../reusedComponents/BlackButton";
import styles from "./DashboardAccountDetails.module.css";
import { StylesContext } from "../../contexts/StylesContext";

export default function DashboardAccountDetails() {
  const { userCredentials } = useContext(StylesContext)
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <input type="text" placeholder={userCredentials.username} />
        <input type="text" placeholder={userCredentials.username} />
      </div>
      <input type="text" placeholder={userCredentials.username} />
      <input type="email" placeholder={userCredentials.email} defaultValue={null} />

      <h2>Password Change</h2>
      <input type="password" placeholder="Current password (leave blank to leave unchanged)" />
      <input type="password" placeholder="New password (leave blank to leave unchanged)" />
      <input type="password" placeholder="Confirm new password" />

      <BlackButton className={styles.submitBtn}>Save Changes</BlackButton>
    </form>
  );
}

