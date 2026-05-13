import { createContext } from "react";
import { useState, useEffect } from "react";

export const StylesContext = createContext();
export function defaultFilters() {
  return {
    categories: [],
    sizes: [],
    brands: [],
    color: [],
    minPrice: null,
    maxPrice: null,
  };
}

export default function CardProvider({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [allStyles, setAllStyles] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [activePanel, setActivePanel] = useState(null);
  const [sort, setSort] = useState("newest");
  const [cartState, setCartState] = useState("shopping")
  const [filters, setFilters] = useState(defaultFilters);
  const [orders, setOrders] = useState([])

  const clearCart = () => {
    setCartItems([]);
  }

  const count = {cartCount: cartItems.length, wishlistCount: wishlist.length};
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
      return [
        ...mensStyles || [],
        ...womenStyles || [],
        ...trendyProducts || [],
        ...limitedEditionProducts || [],
        ...eastsideProducts || [],
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

  const searchResults = allData && filterProducts(allData);
  
  function handleChange(e) {
    setSearch(e.target.value);
  }
  
  function addItems(card) {
    setCartItems((cartItems) => [...cartItems, card]);
  }

  function addItemsToCart(card) {
    setCartItems((prev)=>{
      const exists = prev.find((item)=>item.id === card.id);
      if(exists){
        return prev;
      } else {
        return [...prev, card];
      }
    });

    setWishlist((prev)=>{
      return prev.filter((item)=>item.id !== card.id)
    });
  }


  function addItemsToWishlist(card) {
    setWishlist((prev)=>{
      const exists = prev.find((item)=>item.id === card.id);
      if(exists){
        return prev.filter((item)=>item.id !== card.id)
      } else {
        return [...prev,
          card
        ]
      }
    })
  
  }
  
  function deleteItem(id) {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  }
  
  function deleteItemFromWishlist(id) {
    setWishlist((wishlist) => wishlist.filter((item) => item.id !== id));
  }
  
  useEffect(() => {
  setLoading(true);

  async function getAllStyles() {
    try {
      const res = await fetch("http://localhost:3000/data");
      const data = await res.json();
      setAllStyles(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  getAllStyles();
}, []);
  
  function togglePanel(panelName) {
    setActivePanel((currentPanel) =>
      currentPanel === panelName ? null : panelName
    );
  }
  function openPanel(panelName) {
    setActivePanel(panelName);
  }
  function closePanel() {
    setActivePanel(null);
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
        allData,
        setCartItems,
        addItems,
        addItemsToWishlist,
        addItemsToCart,
        clearCart,  
        deleteItem,
        deleteItemFromWishlist,
        loading,
        count,    
        search,
        setSearch,
        handleChange,
        activePanel,
        togglePanel,
        openPanel,
        closePanel,
        sort,
        setSort,
        cartState,
        setCartState,
        filters,
        setFilters,
        orders,
        setOrders
      }}
    >
      {children}
    </StylesContext.Provider>
  );
}
