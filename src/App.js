import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/ui/pages/HomePage";
import ShopPage from "./components/ui/pages/ShopPage";
import SingleProductPage from "./components/ui/pages/SingleProductPage";
import LoginPage  from "./components/ui/pages/LoginPage";
import RegisterPage  from "./components/ui/pages/RegisterPage";
import AdminDashboardPage from "./components/dashboard/dashboardPage/AdminDashboardPage";
import ProductPage from "./components/dashboard/dashboardPage/ProductPage";
import CreateProductPage from "./components/dashboard/dashboardPage/CreateProductPage";
import UsersPage from "./components/dashboard/dashboardPage/UsersPage";
import AdminPage from "./components/dashboard/dashboardPage/AdminPage";
import AdminRegisterPage from "./components/dashboard/dashboardPage/AdminRegisterPage";
import CartPage from "./components/ui/pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop/:id" element={<SingleProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/product" element={<ProductPage />} />
        <Route path="/admin/createproduct" element={<CreateProductPage />} />
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/register" element={<AdminRegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
