import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ProductModifyPage from "./pages/ProductModifyPage";
import HomePage from "./pages/HomePage";
import { ProductList } from "./components";
import ProductCreatePage from "./pages/ProductCreatePage";
import { Grid } from "@mui/material";
import { Layout } from "./components/shared";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/product/add" element={<ProductCreatePage />}></Route>
        <Route
          path="/product/modify/:productId"
          element={<ProductModifyPage />}
        ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
