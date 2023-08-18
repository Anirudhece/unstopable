import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SideDrawer from "./scenes/global/SideDrawer/SideDrawer";
import { Box, CssBaseline } from "@mui/material";
import Topbar from "./scenes/global/Topbar/Tapbar.jsx";
import Assessment from "./scenes/assessment/Assessment";
import Dashboard from "./scenes/dashboard/Dashboard.jsx";
import MyLibrary from "./scenes/myLibrary/MyLibrary.jsx";
import RoundStatus from "./scenes/roundStatus/RoundStatus";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isCollapsible = windowWidth <= 600;

  return (
    <Box>
      <CssBaseline />
      <SideDrawer />
      <Box
        style={{
          marginLeft: isCollapsible ? 0 : "140px",
          background: "var(--system-background, #F6F8FA)",
        }}
      >
        <Box ml="10px" mr="10px">
          <Topbar isCollapsible={isCollapsible} />
          <Routes>
            <Route path="/" element={<Navigate to="/Assessment" />} />
            <Route path="/Assessment" element={<Assessment />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/MyLibrary" element={<MyLibrary />} />
            <Route path="/RoundStatus" element={<RoundStatus />} />
          </Routes>
        </Box>
      </Box>
      <style>
        {`
          @media (max-width: 1100px) {
            .collapsed-sidebar-margin {
              margin-left: 0;
            }
          }
        `}
      </style>
    </Box>
  );
}

export default App;
