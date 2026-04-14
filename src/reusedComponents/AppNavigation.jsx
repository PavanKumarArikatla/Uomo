import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { StylesContext } from "../contexts/StylesContext";
import styles from "./AppNavigation.module.css";

export default function AppNavigation() {
  const { count, activePanel, togglePanel, openPanel } = useContext(StylesContext);
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
            <NavLink to="/kids" >COLLECTION</NavLink>
          </p>
          <p className={styles.type}>
            <NavLink to="/beauty" >JOURNAL</NavLink>
          </p>
          <p className={styles.type}>
            <NavLink to="/more" >LOOKBOOK</NavLink>
          </p>
          <p className={styles.type}>
            <NavLink to="/dashboard" >PAGES</NavLink>
          </p>
        </div>
      </div>

      <div className={styles.navRight}>
        <button onClick={() => togglePanel("search")}>
          <li>
            {activePanel !== "search" ? <i className="fa-brands fa-sistrix cursor-pointer"></i> : <p className="cursor-pointer">&#x1D5B7;</p>}
          </li>
        </button>
        <button onClick={() => togglePanel("login")} className="cursor-pointer">
          <li>
            <i className="fa-regular fa-user"></i>
          </li>
        </button>

        <button className="cursor-pointer" onClick={() => togglePanel("wishlist")}>
          <li className={styles.cartWrapper}>
            <i className="fa-regular fa-heart"></i>
            {count.wishlistCount > 0 && <span className={styles.badge}>{count.wishlistCount}</span>}
          </li>
        </button>

        <button className="cursor-pointer" onClick={() => togglePanel("cart")}>
          <li className={styles.cartWrapper}>
            <i className="fa-solid fa-bag-shopping"></i>
            {count.cartCount > 0 && <span className={styles.badge}>{count.cartCount}</span>}
          </li>
        </button>

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
