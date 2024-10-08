import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/router.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);

//mutation-> data ko add/update krne ke lye
//query-> data ko get krne ke lye
//stale => cache
// unvalidate stale => cache ko khatam krne ke lye
