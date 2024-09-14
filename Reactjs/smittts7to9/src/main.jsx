import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./Route.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import UserContextProvider from "./context/UserContext.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <UserContextProvider>
      <AppRouter />
    </UserContextProvider>
  </ThemeContextProvider>
);
