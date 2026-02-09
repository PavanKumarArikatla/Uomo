import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CardProvider from "./contexts/StylesContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </StrictMode>
);
