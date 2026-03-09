import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import AppNavigation from "../reusedComponents/AppNavigation";
import Footer from "./homeComponents/Footer";
import Login from "../components/navigationComponents/Login";
import Register from "../components/navigationComponents/Register";
import HomeCart from "./navigationComponents/MiniCart";
import Search from "./navigationComponents/Search";
import Filters from "../features/Filters";

export default function AppLayout() {
  const { activePanel } = useContext(StylesContext);
  return (
    <>
      <div>
        <AppNavigation />
        <Outlet />
        <Footer />
      </div>

      {activePanel === "login" && <Login />}
      {activePanel === "register" && <Register />}
      {activePanel === "cart" && <HomeCart />}
      {activePanel === "search" && <Search />}
      {activePanel === "filter" && <Filters />}
    </>
  );
}
