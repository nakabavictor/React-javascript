import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { AppProvider } from "./Context/AppContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
