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
import Admin from "./pages/Admin.jsx";

function App() {
  const location = useLocation();

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
        <Route path="/products/:id" element={<ProductDetail />} />/
        <Route path="/admin" element={<Admin />} />/
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showHeaderAndFooter && <Footer />}
    </>
  );
}

export default App;
