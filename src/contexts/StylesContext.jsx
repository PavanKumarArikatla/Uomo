import { createContext } from "react";
import { useState, useEffect } from "react";

export const StylesContext = createContext();

export default function CardProvider({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [allStyles, setAllStyles] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [activeNavPanel, setActiveNavPanel] = useState(null)
  
  const count = cartItems.length;
  const {
    mensStyles,
    womenStyles,
    trendyProducts,
    limitedEditionProducts,
    eastsideProducts,
    categories,
    winterstyles,
  } = allStyles;
  function getAllData() {
    if (
      mensStyles ||
      womenStyles ||
      trendyProducts ||
      limitedEditionProducts ||
      eastsideProducts
    )
      return [
        ...mensStyles,
        ...womenStyles,
        ...trendyProducts,
        ...limitedEditionProducts,
        ...eastsideProducts,
      ];
  }

  const allData = getAllData();

  function filterProducts(products) {
    return products.filter((item) =>
      item.style
        .toString()
        .toLocaleLowerCase()
        .includes(search.toString().toLocaleLowerCase()),
    );
  }

  function toggleNavPanel(panelName) {
    setActiveNavPanel((currentPanel) =>
      currentPanel === panelName ? null : panelName
    );
  }

  const login = activeNavPanel === "login";
  const register = activeNavPanel === "register";
  const isCartOpen = activeNavPanel === "cart";
  const isSearchOpened = activeNavPanel === "search";
  const isWishlistOpen = activeNavPanel === "wishlist";

  function handleLogin(){
    toggleNavPanel("login");
  }
  function handleRegister(){
    toggleNavPanel("register");
  }
  function handleCart(){
    toggleNavPanel("cart");
  }
  function handleChange(e) {
    setSearch(e.target.value);
  }
  function handleSearch(){
    toggleNavPanel("search");
  }
  function handleWishlist() {
    toggleNavPanel("wishlist");
  }
  
  function closeButton(){
    setActiveNavPanel(null);
  }

  const searchResults = allData && filterProducts(allData);

  function addItems(card) {
    setCartItems((cartItems) => [...cartItems, card]);
  }

  function addItemsToWishlist(card) {
    setWishlist((wishlist) => [...wishlist, card]);
  }

  function deleteItem(id) {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  }

  function deleteItemFromWishlist(id) {
    setWishlist((cartItems) => cartItems.filter((item) => item.id !== id));
  }

  useEffect(function () {
    setLoading(true);
    async function getAllStyles() {
      const res = await fetch("http://localhost:3000/data");
      const styles = await res.json();
      setAllStyles(styles);
      setLoading(false);
    }
    getAllStyles();
  }, []);

  return (
    <StylesContext.Provider
      value={{
        mensStyles,
        womenStyles,
        trendyProducts,
        limitedEditionProducts,
        eastsideProducts,
        categories,
        winterstyles,
        searchResults,
        cartItems,
        wishlist,
        setCartItems,
        addItems,
        addItemsToWishlist,
        deleteItem,
        deleteItemFromWishlist,
        loading,
        count,
        search,
        setSearch,
        handleChange,
        login,
        handleLogin,
        register,
        handleRegister,
        closeButton,
        isCartOpen,
        handleCart,
        isSearchOpened,
        handleSearch,
        isWishlistOpen,
        handleWishlist,
        activeNavPanel
      }}
    >
      {children}
    </StylesContext.Provider>
  );
}
