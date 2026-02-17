import { Outlet } from "react-router-dom";
import AppNavigation from "../reusedComponents/AppNavigation";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div>
      <AppNavigation />

      <Outlet />

      <Footer />
    </div>
  );
}
