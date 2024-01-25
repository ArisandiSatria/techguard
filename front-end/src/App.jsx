import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Register } from "./pages/Register";

import NotFound from "./components/NotFound";
import Product from "./pages/Product";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import ShoppingCart from "./pages/ShopCart.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Admin from "./pages/Admin.jsx";
import { useRecoilValue } from "recoil";
import { userIsLoggedIn } from "./state/selector/loggedInUser.js";
import DetailOrder from "./components/Admin/order/DetailOrder.jsx";

function App() {
  const location = useLocation();
  const userData = useRecoilValue(userIsLoggedIn);

  const routesWithoutHeaderAndFooter = ["/login", "/register"];

  const showHeaderAndFooter = !routesWithoutHeaderAndFooter.includes(
    location.pathname
  );
  return (
    <>
      {showHeaderAndFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />/
        <Route path="/login" element={<Login />} />/
        <Route path="/register" element={<Register />} />/
        <Route path="/products" element={<Product />} />/
        <Route path="/product/:id" element={<ProductDetail />} />/
        <Route path="/order/:id" element={<DetailOrder />} />/
        <Route path="/cart" element={<ShoppingCart />} />/
        <Route element={<PrivateRoute />}>
          <Route
            path="/profile"
            element={
              userData && userData.role == "customer" ? (
                <UserProfile />
              ) : (
                <Admin />
              )
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showHeaderAndFooter && <Footer />}
    </>
  );
}

export default App;
