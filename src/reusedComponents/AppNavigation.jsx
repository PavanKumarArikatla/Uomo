import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { StylesContext } from "../contexts/StylesContext";
import styles from "./AppNavigation.module.css";

export default function AppNavigation() {
  const { count, isSearchOpened, handleSearch, handleLogin, handleCart } = useContext(StylesContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const navRef = useRef(null);

  function closeMenu() {
    setIsMenuOpen(false);
    setIsHomeDropdownOpen(false);
    setIsShopDropdownOpen(false);
  }

  useEffect(() => {
    function handleOutsideClick(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsHomeDropdownOpen(false);
        setIsShopDropdownOpen(false);
      }
    }

    function handleEsc(event) {
      if (event.key === "Escape") {
        setIsHomeDropdownOpen(false);
        setIsShopDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 930) {
        setIsHomeDropdownOpen(false);
        setIsShopDropdownOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={navRef} className={`${styles.nav} ${isMenuOpen ? styles.menuOpen : ""}`}>
      <div className={styles.navLeft}>
        <NavLink to="/" onClick={closeMenu}>
          <img src="logo.svg" alt="UOMO"  />
        </NavLink>
        <div className={styles.navLinks}>
          <div className={styles.homeItem}>
            <button
              type="button"
              className={`${styles.type} ${styles.homeTrigger}`}
              onClick={() => {
                setIsHomeDropdownOpen((open) => !open);
                setIsShopDropdownOpen(false);
              }}
            >
              HOME
            </button>

            <div className={`${styles.homeDropdown} ${isHomeDropdownOpen ? styles.homeDropdownOpen : ""}`}>
              <div className={styles.dropdownColumn}>
                <NavLink to="/men" className={styles.dropdownHeading}>SHOP PAGES</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Default</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Topbar</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Collpase</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Simple</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Masonry</NavLink>
                <NavLink to="/men" className={styles.dropdownHeading}>PRODUCT PAGES</NavLink>
                <NavLink to="/item" className={styles.dropdownLink}>Default</NavLink>
                <NavLink to="/item" className={styles.dropdownLink}>Images Left</NavLink>
                <NavLink to="/item" className={styles.dropdownLink}>Image Grid</NavLink>
                <NavLink to="/item" className={styles.dropdownLink}>Image Slider</NavLink>
                <NavLink to="/item" className={styles.dropdownLink}>Images Stacked</NavLink>
              </div>

              <div className={styles.dropdownColumn}>
                <NavLink to="/men" className={styles.dropdownHeading}>OTHER PAGES</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Collection</NavLink>
                <NavLink to="/more" className={styles.dropdownLink}>LookBook</NavLink>
                <NavLink to="/fashion" className={styles.dropdownLink}>Categories Page</NavLink>
                <NavLink to="/cart" className={styles.dropdownLink}>Shopping Cart</NavLink>
                <NavLink to="/wishlist" className={styles.dropdownLink}>Wishlist</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Order Tracking</NavLink>
                <NavLink to="/cart" className={styles.dropdownLink}>Checkout</NavLink>
                <NavLink to="/cart" className={styles.dropdownLink}>Checkout - 2 Columns</NavLink>
              </div>

              <div className={styles.dropdownColumn}>
                <NavLink to="/men" className={styles.dropdownHeading}>ELEMENTS</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Accordion</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Pricing Table</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Google Maps</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Message Box</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Progress Bars</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Charts</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Icon Box</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Product Tabs</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Products Grid</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Tabs</NavLink>
                <NavLink to="/men" className={styles.dropdownLink}>Video Players</NavLink>
              </div>

              <div className={styles.dropdownPromo}>
                <strong>NEW HORIZONS</strong>
                <button type="button">SHOP NOW</button>
              </div>
            </div>
          </div>
          <div className={styles.shopItem}>
            <button
              type="button"
              className={`${styles.type} ${styles.shopTrigger}`}
              onClick={() => {
                setIsShopDropdownOpen((open) => !open);
                setIsHomeDropdownOpen(false);
              }}
            >
              SHOP
            </button>

            <div className={`${styles.shopDropdown} ${isShopDropdownOpen ? styles.shopDropdownOpen : ""}`}>
              <div className={styles.dropdownColumn}>
                <NavLink to="/women" className={styles.dropdownHeading}>BLOG STYLES</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Alternative</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Small images</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Blog chess</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Masonry grid</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Infinit scrollingFEATURE</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>With background</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Blog flat</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Default flat</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Blog mask</NavLink>
              </div>

              <div className={styles.dropdownColumn}>
                <NavLink to="/women" className={styles.dropdownHeading}>SINGLE POST</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Standard Post</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Image Post</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Video Post</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Audio Post</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Gallery Post</NavLink>
              </div>

              <div className={styles.dropdownColumn}>
                <NavLink to="/women" className={styles.dropdownHeading}>NAVIGATION</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Simple</NavLink>
                <NavLink to="/women" className={styles.dropdownLink}>Image Background</NavLink>
              </div>
            </div>
          </div>
          <p className={styles.type}>
            <NavLink to="/kids" onClick={closeMenu}>COLLECTION</NavLink>
          </p>
          <p className={styles.type}>
            <NavLink to="/beauty" onClick={closeMenu}>JOURNAL</NavLink>
          </p>
          <p className={styles.type}>
            <NavLink to="/more" onClick={closeMenu}>LOOKBOOK</NavLink>
          </p>
          <p className={styles.type}>
            <NavLink to="/men" onClick={closeMenu}>PAGES</NavLink>
          </p>
        </div>
      </div>

      <div className={styles.navRight}>
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
