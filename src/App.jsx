import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ItemDetails from "./pages/ItemDetails";
import Men from "./pages/categories/fashion/Men";
import Women from "./pages/categories/fashion/Women";
import Kids from "./pages/categories/fashion/Kids";
import Beauty from "./pages/categories/fashion/Beauty";
import More from "./pages/categories/fashion/More";
import SearchResults from "./pages/categories/fashion/SearchResults";
import AppLayout from "./components/AppLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "men", element: <Men /> },
        { path: "women", element: <Women /> },
        { path: "kids", element: <Kids /> },
        { path: "beauty", element: <Beauty /> },
        { path: "more", element: <More /> },
        { path: "item", element: <ItemDetails /> },
        { path: "search", element: <SearchResults /> },
        { path: "fashion", element: <SearchResults /> },
        { path: "watches", element: <SearchResults /> },
        { path: "cosmetics", element: <SearchResults /> },
        { path: "babystore", element: <SearchResults /> }
      ],
    },
    { path: "login", element: <Login /> },
    { path: "wishlist", element: <Wishlist /> },
    { path: "cart", element: <Cart /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
