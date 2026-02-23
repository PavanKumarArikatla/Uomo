import { createContext } from "react";
import { useState, useEffect } from "react";

export const StylesContext = createContext();

export default function CardProvider({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [allStyles, setAllStyles] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  
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

  function handleLogin(){
    setLogin((login) => !login)
  }
  function handleRegister(){
    setRegister((register) => !register)
  }
  function closeLoginRegister(){
    setLogin(false)
    setRegister(false)
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

  function handleChange(e) {
    setSearch(e.target.value);
  }

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
        closeLoginRegister
      }}
    >
      {children}
    </StylesContext.Provider>
  );
}
