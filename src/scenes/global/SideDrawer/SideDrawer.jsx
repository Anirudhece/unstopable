import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";

// RiDashboardLine
import { RiDashboardLine } from "react-icons/ri";

import {
  MdOutlineNoteAlt,
  MdOutlineQuiz,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";

const drawerWidth = 240;

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
        <List>
          <ListItem sx={{ justifyContent: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
                <RiDashboardLine />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </Box>
          </ListItem>
          <ListItem sx={{ justifyContent: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
                <MdOutlineNoteAlt />
              </ListItemIcon>
              <ListItemText primary="Assessment" />
            </Box>
          </ListItem>

          <ListItem sx={{ justifyContent: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
                <MdOutlineQuiz />
              </ListItemIcon>
              <ListItemText primary="My Library" />
            </Box>
          </ListItem>

          <Divider />

          <ListItem sx={{ justifyContent: "center" }}>
            <Chip variant="outlined" color="error" label="Admin" />
          </ListItem>

          <ListItem sx={{ justifyContent: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <ListItemIcon sx={{ display: "flex", justifyContent: "center" }}>
                <MdOutlineAdminPanelSettings />
              </ListItemIcon>
              <ListItemText primary="Round Status" />
            </Box>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
