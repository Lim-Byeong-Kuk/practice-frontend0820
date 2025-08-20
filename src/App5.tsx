import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ProductModifyPage from "./pages/ProductModifyPage";
import HomePage from "./pages/HomePage";
import { ProductList } from "./components";
import ProductCreatePage from "./pages/ProductCreatePage";
import { Grid } from "@mui/material";

function App5() {
  return (
    <>
      <h1>MUI 테스트</h1>
      <Grid container>
        <Grid item xs={12} height={100} bgcolor={"red"}>
          <header>헤더 영역입니다</header>
        </Grid>
        <Grid item xs={3} height={500} bgcolor={"yellow"}>
          <aside>어사이드 영역입니다</aside>
        </Grid>
        <Grid item xs={9} height={500} bgcolor={"green"}>
          <article>아티클 영역입니다</article>
        </Grid>
        <Grid item xs={12} height={100} bgcolor={"skyBlue"}>
          <header>푸터 영역입니다</header>
        </Grid>
      </Grid>
    </>
  );
}

export default App5;
