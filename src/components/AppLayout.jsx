import { Outlet } from "react-router-dom";
import AppNavigation from "../reusedComponents/AppNavigation";
import Footer from "./Footer";
import Login from "./Login";
import { useContext } from "react";
import { StylesContext } from "../contexts/StylesContext";
import Register from "./Register";

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
