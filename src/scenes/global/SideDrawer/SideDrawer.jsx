import React, { useState, useEffect } from "react";
import { Box, Drawer, List, Divider, Chip } from "@mui/material";
import { RiDashboardLine } from "react-icons/ri";
import InsideList from "../../../components/InsideList";
import {
  MdOutlineNoteAlt,
  MdOutlineQuiz,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";

const drawerWidth = 130;

export default function SideDrawer() {
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

  const isCollapsible = windowWidth <= 900;

  return (
    <Drawer
      sx={{
        width: isCollapsible ? 0 : drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isCollapsible ? 0 : drawerWidth,
          boxSizing: "border-box",
          transition: "width 0.3s ease",
          overflowX: isCollapsible ? "hidden" : "visible",
          "@media (max-width: 1100px)": {
            width: isCollapsible ? 0 : drawerWidth,
            "& .MuiDrawer-paper": {
              width: isCollapsible ? 0 : drawerWidth,
            },
          },
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List
        sx={{
          color: "var(--secondary-1, #0073E6)",
          fontFamily: "Inter",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: "500",
        }}
      >
        <InsideList to="/Dashboard" value="Dashboard" icon={RiDashboardLine} />
        <InsideList to="/Assessment" value="Assessment" icon={MdOutlineNoteAlt} />
        <InsideList to="/MyLibrary" value="MyLibrary" icon={MdOutlineQuiz} />

        <Divider variant="middle" />

        <Box m={1.5} sx={{ display: "flex", justifyContent: "center" }}>
          <Chip variant="outlined" color="error" label="Admin" />
        </Box>

        <InsideList
          to="/RoundStatus"
          value="RoundStatus"
          icon={MdOutlineAdminPanelSettings}
        />
      </List>
    </Drawer>
  );
}
