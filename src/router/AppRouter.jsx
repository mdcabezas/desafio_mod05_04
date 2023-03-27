import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import NavBar from "../components/NavBar";
import Products from "../views/Products";
import ProductDetail from "../views/ProductDetail";
import ShoppingCart from "../views/ShoppingCart";

function AppRouter() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/pizza/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<ShoppingCart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default AppRouter