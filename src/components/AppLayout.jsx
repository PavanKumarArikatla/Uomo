import { Outlet } from "react-router-dom";
import AppNavigation from "../reusedComponents/AppNavigation";

export default function AppLayout() {
  return (
    <div>
      <AppNavigation />

      <Outlet />
    </div>
  );
}
