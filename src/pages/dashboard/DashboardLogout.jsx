import { useContext } from "react";
import styles from "./DashboardLogout.module.css";
import { StylesContext } from "../../contexts/StylesContext";

export default function DashboardLogout() {
  const { currentUser, setCurrentUser, setAppLoading } = useContext(StylesContext)
  return (
    <section className={styles.panel}>
      {currentUser ? 
        <>
          <p className={styles.message}>
            You are still logged in. Click the logout action in your auth flow to end this session.
          </p>
          <button
            onClick={() => {
              localStorage.removeItem("user");
              setAppLoading();
              setCurrentUser(null)
            }}
            className="cursor-pointer"
          >Logout</button> 
        </>
      
      : <p className={styles.message}>
          You're logged out.
        </p>}

    </section>
  );
}

