import styles from "./Login.module.css";
import BackButton from "../reusedComponents/BackButton";

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="homecontainer">
      <BackButton />
      <form onSubmit={handleSubmit} className={styles.login}>
        {/* <img src="Login1.jpg" alt="Login image" /> */}
        <b className="text-2xl text-fuchsia-900">Create an account</b>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button className={styles.btn}>
          <b>Create account</b>
        </button>
      </form>
    </div>
  );
}
