import { useContext } from "react";
import styles from "./DashboardLogout.module.css";
import { StylesContext } from "../../contexts/StylesContext";

export default function DashboardLogout() {
  const { setUserCredentials, userLoggedIn, setUserLoggedIn } = useContext(StylesContext)
  return (
    <section className={styles.panel}>
      {userLoggedIn ? 
        <>
          <p className={styles.message}>
            You are still logged in. Click the logout action in your auth flow to end this session.
          </p>
          <button
            onClick={() => {
              setUserCredentials({username: "", email: "", password: "", address: [], country: ""});
              setUserLoggedIn(false);
            }}
            className="cursor-pointer"
          >Logout</button> 
        </>
      
      : <p className={styles.message}>
          You've logged out succesfully
        </p>}

    </section>
  );
}

