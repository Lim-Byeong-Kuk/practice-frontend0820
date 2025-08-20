import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ProductModifyPage from "./pages/ProductModifyPage";
import HomePage from "./pages/HomePage";
import { ProductList } from "./components";
import ProductCreatePage from "./pages/ProductCreatePage";
import { Button } from "@mui/material";
import { useState } from "react";

function App3() {
  return (
    <>
      <h1>MUI 테스트</h1>
      <Button>기본 버튼</Button>
      <Button variant="contained">contained 버튼</Button>
      <Button variant="outlined">outlined 버튼</Button>
      <Button variant="contained" color="error">
        오류 버튼
      </Button>
    </>
  );
}

export default App3;
