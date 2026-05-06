import { createContext } from "react";
import { useState, useEffect } from "react";

export const StylesContext = createContext();
export function defaultFilters() {
  return {
    category: "",
    sizes: [],
    brands: [],
    color: [],
    minPrice: null,
    maxPrice: null,
  };
}

export default function CardProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
  const [users, setUsers] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userCredentials, setUserCredentials] = useState({username: "", email: "", password: "", address: [], country: ""});
  const [cartLoading, setCartLoading] = useState(false)
  const count = {cartCount: cartItems.reduce((totalItems, item) => item.quantity + totalItems , 0), wishlistCount: wishlist.length};

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

  function setAppLoading(){
    setCartLoading(true)
    setTimeout(() => {
      setCartLoading(false)
    }, 200)
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
  
  function addItems(card) {

    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === card.id);

      if (exists) {
        return prevItems.map((item) =>
          item.id === card.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...card, quantity: 1 }];
      }
    });
    setAppLoading()
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

  useEffect(() => {
    setLoading(true);
    async function getUsers(){
      try{
        const res = await fetch("http://localhost:3000/users");
        const data = await res.json();
        setUsers(data)
      }catch(err){
        console.error(err)
      }finally{
        setLoading(false)
      }
    }
    getUsers();
  },[])
  
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
        mensStyles, womenStyles, trendyProducts, limitedEditionProducts, eastsideProducts, categories, winterstyles,
        searchResults,
        wishlist,
        allData,
        cartItems, setCartItems,
        addItems, addItemsToWishlist,
        deleteItem, deleteItemFromWishlist,
        loading,
        count,
        orders, setOrders,
        search, setSearch,
        activePanel, togglePanel, openPanel, closePanel,
        sort, setSort,
        cartState, setCartState,
        filters, setFilters, 
        userCredentials, setUserCredentials,
        users, userLoggedIn, setUserLoggedIn,
        cartLoading,
        setAppLoading
      }}
    >
      {children}
    </StylesContext.Provider>
  );
}
