import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { StylesContext } from "../contexts/StylesContext";
import styles from "./AppNavigation.module.css";

export default function AppNavigation() {
  const { count, activePanel, togglePanel, openPanel, userLoggedIn, userCredentials } = useContext(StylesContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleWishlistClick() {
    openPanel("wishlist");
    navigate("/wishlist");
    closeMenu();
  }

  return (
    <div className={`${styles.nav} ${isMenuOpen ? styles.menuOpen : ""}`}>
      <div className={styles.navLeft}>
        <NavLink to="/" >
          <img src="/logo.svg" alt="UOMO"  />
        </NavLink>
        <div className={styles.navLinks}> 
          <p className={styles.type}>
            <NavLink to="/men" >MEN</NavLink>
          </p>
          <p className={styles.type}>
            <NavLink to="/women" >WOMEN</NavLink>
          </p>
          <p className={styles.type}>
            <NavLink to="/kids" >KIDS</NavLink>
          </p>
          <p className={styles.type}>
            <NavLink to="/beauty" >BEAUTY</NavLink>
          </p>
          <p className={styles.type}>
            <NavLink to="/more" >MORE</NavLink>
          </p>
          <p className={styles.type}>
            <NavLink to="/dashboard" >DASHBOARD</NavLink>
          </p>
        </div>
      </div>

      <div className={styles.navRight}>
        <button onClick={() => togglePanel("search")}>
          <li>
            {activePanel !== "search" ? <i className="fa-brands fa-sistrix cursor-pointer"></i> : <p className="cursor-pointer">&#x1D5B7;</p>}
          </li>
        </button>

        <button className="cursor-pointer" onClick={() => togglePanel("wishlist")}>
          <li>
            <i className="fa-regular fa-heart"></i>
          </li>
        </button>

        <button className="cursor-pointer" onClick={() => togglePanel("cart")}>
          <li className={styles.cartWrapper}>
            <i className="fa-solid fa-bag-shopping"></i>
            {count > 0 && <span className={styles.badge}>{count}</span>}
          </li>
        </button>

        {userLoggedIn ? <button onClick={() => navigate("/dashboard/account-details")} className="cursor-pointer underline">
            {userCredentials.username}
          </button>
        : <button onClick={() => togglePanel("login")} className="cursor-pointer">
            <li>
              <i className="fa-regular fa-user"></i>
            </li>
          </button>}

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

    </div>
  );
}
