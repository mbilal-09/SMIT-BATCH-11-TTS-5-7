import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseState from "./pages/UseState";
import App from "./App";
import About from "./pages/About";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Material from "./pages/Material";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<App />} />
          <Route path="/material" element={<Material />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
