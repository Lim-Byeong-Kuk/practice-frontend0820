import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ProductModifyPage from "./pages/ProductModifyPage";
import HomePage from "./pages/HomePage";
import { ProductList } from "./components";
import ProductCreatePage from "./pages/ProductCreatePage";
import { Grid } from "@mui/material";
// import { Button } from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2";
// import { useState } from "react";

function App4() {
  return (
    <>
      <h1>MUI 테스트</h1>
      <Grid container>
        <Grid xs={12} sm={2} md={7} bgcolor="red">
          1
        </Grid>
        <Grid xs={12} sm={6} md={3} bgcolor="yellow">
          2
        </Grid>
        <Grid xs={12} sm={4} md={1} bgcolor="blue">
          3
        </Grid>
      </Grid>
    </>
  );
}

export default App4;
