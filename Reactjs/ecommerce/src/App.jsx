import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/Auth/Signup";
import SignIn from "./pages/Auth/Signin";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Carts from "./pages/Carts";
import Orders from "./pages/Orders";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* auth parent route */}
          <Route path="/auth">
            <Route index element={<Auth />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
          {/* auth ke elawa */}

          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Carts />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
