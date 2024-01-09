import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Register } from "./pages/Register";

import NotFound from "./components/NotFound";
import Product from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />/
      <Route path="/login" element={<Login />} />/
      <Route path="/register" element={<Register />} />/
      <Route path="/product" element={<Product />} />/
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
