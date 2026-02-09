import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import styles from "./AppNavigation.module.css";

export default function AppNavigation() {
  const navigate = useNavigate();
  const { count, search, handleChange } = useContext(StylesContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (search) navigate("/search");
  }
  return (
    <div className={styles.nav}>
      <NavLink to="/">
        <img src="logo.svg" alt="UOMO" />
      </NavLink>
      <p className={styles.type}>
        <NavLink to="/men">Men</NavLink>
      </p>
      <p className={styles.type}>
        <NavLink to="/women">Women</NavLink>
      </p>
      <p className={styles.type}>
        <NavLink to="/kids">Kids</NavLink>
      </p>
      <p className={styles.type}>
        <NavLink to="/beauty">Beauty</NavLink>
      </p>
      <p className={styles.type}>
        <NavLink to="/more">More</NavLink>
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
      </form>
      <NavLink to="/login">
        <li>
          <i className="fa-regular fa-user"></i>
        </li>
      </NavLink>

      <NavLink to="/wishlist">
        <li>
          <i className="fa-regular fa-heart"></i>
        </li>
      </NavLink>

      <NavLink to="/cart">
        <li className={styles.cartWrapper}>
          <i className="fa-solid fa-cart-shopping"></i>
          {count > 0 && <span className={styles.badge}>{count}</span>}
        </li>
      </NavLink>

      <NavLink to=""><i className="fa-solid fa-bars"></i></NavLink>

    </div>
  );
}
