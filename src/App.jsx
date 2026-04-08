import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

import Wishlist from "./pages/Wishlist";
import Cart from "./pages/cart/Cart";
import ItemDetails from "./pages/ItemDetails";
import Men from "./pages/categories/fashion/Men";
import Women from "./pages/categories/fashion/Women";
import Kids from "./pages/categories/fashion/Kids";
import Beauty from "./pages/categories/fashion/Beauty";
import More from "./pages/categories/fashion/More";
import SearchResults from "./pages/SearchResults";
import AppLayout from "./components/AppLayout";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardOrders from "./pages/dashboard/DashboardOrders";
import DashboardAddresses from "./pages/dashboard/DashboardAddresses";
import DashboardAccountDetails from "./pages/dashboard/DashboardAccountDetails";
import DashboardWishlist from "./pages/dashboard/DashboardWishlist";
import DashboardDownloads from "./pages/dashboard/DashboardDownloads";
import DashboardLogout from "./pages/dashboard/DashboardLogout";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/search/:search", element: <SearchResults /> },
        { path: "/category/:type", element: <SearchResults /> },
        { path: "men",
          children: [
            { index: true, element: <Men /> },
            { path: ":style", element: <ItemDetails /> }
          ]
        },
        { path: "women", 
          children: [
            { index: true, element: <Women /> },
            { path: ":style", element: <ItemDetails />}
          ]
        },
        { path: "kids",
          children: [
            { index: true, element: <Kids /> },
            { path: ":style", element: <ItemDetails /> }
          ]
        },
        { path: "beauty", 
          children: [
            { index: true, element: <Beauty /> },
            { path: ":style", element: <ItemDetails />}
          ]
        },
        { path: "more", 
          children: [
            { index: true, element: <More /> },
            { path: ":style", element: <ItemDetails />}
          ]
        },
        { path: "/:item", element: <ItemDetails /> },
        { path: "search", element: <SearchResults /> },
        { path: "fashion", element: <SearchResults /> },
        { path: "watches", element: <SearchResults /> },
        { path: "cosmetics", element: <SearchResults /> },
        { path: "babystore", element: <SearchResults /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "cart", element: <Cart /> },
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            { index: true, element: <DashboardHome /> },
            { path: "orders", element: <DashboardOrders /> },
            { path: "downloads", element: <DashboardDownloads /> },
            { path: "addresses", element: <DashboardAddresses /> },
            { path: "account-details", element: <DashboardAccountDetails /> },
            { path: "wishlist", element: <DashboardWishlist /> },
            { path: "logout", element: <DashboardLogout /> },
          ],
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
