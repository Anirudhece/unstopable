import React from "react";
import { Route, Routes } from "react-router-dom";
import SideDrawer from "./scenes/global/SideDrawer/SideDrawer";
import { Box, Container } from "@mui/material";
import Topbar from "./scenes/global/Topbar/Tapbar.jsx";
import Assessment from "./scenes/assessment/Assessment";
import Dashboard from "./scenes/dashboard/Dashboard.jsx";
import MyLibrary from "./scenes/myLibrary/MyLibrary.jsx";
import RoundStatus from "./scenes/roundStatus/RoundStatus";

function App() {
  return (
    <Box >
      {/* sx={{ background: "var(--system-background, #F6F8FA)" }} */}
      <SideDrawer />
      <Box  style={{ marginLeft: "120px" }}>
        <Topbar />
        <Routes>
          <Route path="/Assessment" element={<Assessment />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/MyLibrary" element={<MyLibrary />} />
          <Route path="/RoundStatus" element={<RoundStatus />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
