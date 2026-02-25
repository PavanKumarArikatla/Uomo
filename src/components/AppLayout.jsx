import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import AppNavigation from "../reusedComponents/AppNavigation";
import Footer from "./homeComponents/Footer";
import Login from "../components/navigationComponents/Login";
import Register from "../components/navigationComponents/Register";
import HomeCart from "./navigationComponents/HomeCart";
import Search from "./navigationComponents/Search";

export default function AppLayout() {
  const { login, register, isCartOpen, isSearchOpened } = useContext(StylesContext)
  return (
    <>
      <div>
        <AppNavigation />
        <Outlet />
        <Footer />
      </div>

      {login && <Login />}
      {register && <Register />}
      {isCartOpen && <HomeCart />}
      {isSearchOpened && <Search />}
    </>
  );
}
