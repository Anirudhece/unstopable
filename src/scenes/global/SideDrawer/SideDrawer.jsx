import React from "react";
import { Box, Drawer, List, Divider, Chip } from "@mui/material";
import { RiDashboardLine } from "react-icons/ri";
import InsideList from "../../../components/InsideList";
import {
  MdOutlineNoteAlt,
  MdOutlineQuiz,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";

const drawerWidth = 120;

export default function SideDrawer() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
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
          <InsideList
            to="/Dashboard"
            value="Dashboard"
            icon={RiDashboardLine}
          />

          <InsideList
            to="/Assessment"
            value="Assessment"
            icon={MdOutlineNoteAlt}
          />

          <InsideList to="/MyLibrary" value="MyLibrary" icon={MdOutlineQuiz} />

          <Divider variant="middle" />

          <Box mt={1} sx={{ display: "flex", justifyContent: "center" }}>
            <Chip variant="outlined" color="error" label="Admin" />
          </Box>

          <InsideList
            to="/RoundStatus"
            value="RoundStatus"
            icon={MdOutlineAdminPanelSettings}
          />
        </List>
      </Drawer>
    </Box>
  );
}
