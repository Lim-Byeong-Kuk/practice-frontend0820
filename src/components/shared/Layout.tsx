import {
  AppBar,
  Box,
  Button,
  Container,
  Fab,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ mb: 4 }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h1"
              sx={{ fontSize: 25, fontweight: "bold", cursor: "pointer" }}
            >
              온라인 쇼핑몰
            </Typography>
            <Button color="inherit">장바구니</Button>
          </Toolbar>
        </AppBar>
        <Container fixed>{children}</Container>
      </Box>

      <Box sx={{ position: "fixed", bottom: "16px", right: "16px" }}>
        <Fab color="primary">추가하기</Fab>
      </Box>
    </>
  );
};

export default Layout;
