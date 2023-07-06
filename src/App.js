import ProductList from "./components/ProductList";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductList/ProductDetail";
import Header from "./components/ProductList/Header";
import Info from "./components/ProductList/Infor";
import Home from "./components/ProductList/Home";
import Contact from "./components/ProductList/Contacts";
import About from "./components/ProductList/About";
import Cart from "./components/ProductList/Cart";
import Checkout from "./components/ProductList/Checkout";
import Admin from "./components/ProductList/Admin";
import AddProduct from "./components/ProductList/AddProduct";
function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/abouts" element={<About />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/products/" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/products/detail/:id" element={<Info />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/addproduct" element={<AddProduct />} />
    </Routes>
  </>
}
export default App;
