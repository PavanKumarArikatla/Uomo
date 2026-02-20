import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import AppNavigation from "../reusedComponents/AppNavigation";
import Footer from "./homeComponents/Footer";
import Login from "../components/navigationComponents/Login";
import Register from "../components/navigationComponents/Register";

export default function AppLayout() {
  const { login, register } = useContext(StylesContext)
  return (
    <>
      <div>
        <AppNavigation />
        <Outlet />
        <Footer />
      </div>

      {login && <Login />}
      {register && <Register />}
    </>
  );
}
