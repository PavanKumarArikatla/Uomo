import { createContext } from "react";
import { useState, useEffect } from "react";

export const StylesContext = createContext();

export default function CardProvider({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [allStyles, setAllStyles] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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

  // const allData = () => {if (
  //     mensStyles ||
  //     womenStyles ||
  //     trendyProducts ||
  //     limitedEditionProducts ||
  //     eastsideProducts
  //   )
  //     return [
  //       ...mensStyles,
  //       ...womenStyles,
  //       ...trendyProducts,
  //       ...limitedEditionProducts,
  //       ...eastsideProducts,
  //     ];}

  // searching item by all the values of the item

  // function filterProducts(products) {
  //   return products.filter((item) =>
  //     Object.values(item)
  //       .toString()
  //       .toLocaleLowerCase()
  //       .includes(search.toString().toLocaleLowerCase())
  //   );
  // }

  // Searching by style value of the item

  function filterProducts(products) {
    return products.filter((item) =>
      item.style
        .toString()
        .toLocaleLowerCase()
        .includes(search.toString().toLocaleLowerCase()),
    );
  }

  const searchResults = allData && filterProducts(allData);

  // const mens = search && mensStyles && filterProducts(mensStyles);
  // const women = search && womenStyles && filterProducts(womenStyles);
  // const trendy = search && trendyProducts && filterProducts(trendyProducts);
  // const limitedEdition = search && limitedEditionProducts && filterProducts(limitedEditionProducts);
  // const eastside = search && eastsideProducts && filterProducts(eastsideProducts);

  // const searchResults = [
  //   ...mens,
  //   ...women,
  //   ...trendy,
  //   ...limitedEdition,
  //   ...eastside,
  // ];

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
      }}
    >
      {children}
    </StylesContext.Provider>
  );
}
