import React from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Box, Typography, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";
function Tapbar() {
  const location = useLocation();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      className="topbar-container"
      mb={1}
    >
      <Box display="flex" className="left" sx={{ alignItems: "center" }}>
        <Box p={1} className="component-name">
          <Typography
            sx={{
              color: "var(--text-100, #1C4980)",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "140%",
            }}
          >
            {location.pathname.replace(/\//g, "")}
          </Typography>
        </Box>
        <Divider sx={{ ml: 3, mr: 3 }} orientation="vertical" flexItem />

        <Box>
          <Typography
            pt={2}
            pb={2}
            sx={{
              color: "var(--secondary-1, #0073E6)",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              borderBottom: "2px solid",
            }}
          >
            <>
              My {}
              {location.pathname.replace(/\//g, "")}
            </>
          </Typography>
        </Box>
      </Box>
      <Box
        className="right"
        sx={{ display: "flex", alignItems: "center", color: "#1C4980" }}
      >
        <PhoneAndroidIcon />
      </Box>
    </Box>
  );
}

export default Tapbar;
