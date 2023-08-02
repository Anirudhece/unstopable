import React from "react";
import { Route, Routes } from "react-router-dom";
import SideDrawer from "./scenes/global/SideDrawer/SideDrawer";
import { Container } from "@mui/material";
import Topbar from "./scenes/global/Topbar/Tapbar.jsx";
// npm run dev is the command
function App() {
  return (
    <>
      <div>eugrfe3wytgre</div>
      <SideDrawer />
      <Container maxWidth="lg" style={{ marginLeft: "150px" }}>
        <Topbar />
        <Routes>{/* <Route path="/" element={<Dashboard />} /> */}</Routes>
      </Container>
    </>
  );
}

export default App;
