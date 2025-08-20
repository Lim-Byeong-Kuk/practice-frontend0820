import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ProductModifyPage from "./pages/ProductModifyPage";
import HomePage from "./pages/HomePage";
import { ProductList } from "./components";
import ProductCreatePage from "./pages/ProductCreatePage";
import { Button } from "@mui/material";
import { useState } from "react";

function App2() {
  const [cnt, setCnt] = useState(10);
  return (
    <>
      Mui 테스트
      <Button
        onClick={() => {
          console.log("first");
          setCnt(cnt + 1);
        }}
      >
        안녕하세요
      </Button>
      {cnt}
    </>
  );
  // return (
  //   <>
  //     <Routes>
  //       <Route index element={<HomePage />} />
  //       <Route path="/product" element={<ProductList />} />
  //       <Route path="/product/:productId" element={<ProductPage />} />
  //       <Route path="/product/add" element={<ProductCreatePage />}></Route>
  //       <Route
  //         path="/product/modify/:productId"
  //         element={<ProductModifyPage />}
  //       ></Route>
  //     </Routes>
  //   </>
  // );
}

export default App2;
