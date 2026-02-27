import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import styles from "./AppNavigation.module.css";

export default function AppNavigation() {
  const { count, isSearchOpened, handleSearch, handleLogin, handleCart } = useContext(StylesContext);

  return (
    <div className={styles.nav}>
      <div className="flex items-center gap-6">
      <NavLink to="/">
        <img src="logo.svg" alt="UOMO"  />
      </NavLink>
      <p className={styles.type}>
        <NavLink to="/men">HOME</NavLink>
      </p>
      <p className={styles.type}>
        <NavLink to="/women">SHOP</NavLink>
      </p>
      <p className={styles.type}>
        <NavLink to="/kids">COLLECTION</NavLink>
      </p>
      <p className={styles.type}>
        <NavLink to="/beauty">JOURNAL</NavLink>
      </p>
      <p className={styles.type}>
        <NavLink to="/more">LOOKBOOK</NavLink>
      </p>
      <p className={styles.type}>
        <NavLink to="/pages">PAGES</NavLink>
      </p>
      </div>

      <div className="flex gap-8">
        <button onClick={handleSearch}>
          <li>
            {!isSearchOpened ? <i className="fa-brands fa-sistrix cursor-pointer"></i> : <p className="cursor-pointer">&#x1D5B7;</p>}
          </li>
        </button>
        <button onClick={handleLogin} className="cursor-pointer">
          <li>
            <i className="fa-regular fa-user"></i>
          </li>
        </button>

        <button className="cursor-pointer">
          <li>
            <i className="fa-regular fa-heart"></i>
          </li>
        </button>

        <button className="cursor-pointer" onClick={handleCart}>
          <li className={styles.cartWrapper}>
            <i className="fa-solid fa-bag-shopping"></i>
            {count > 0 && <span className={styles.badge}>{count}</span>}
          </li>
        </button>

        <NavLink to=""><i className="fa-solid fa-bars"></i></NavLink>
      </div>

    </div>
  );
}
