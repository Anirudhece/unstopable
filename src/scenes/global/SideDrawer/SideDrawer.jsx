import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import Toolbar from "@mui/material/Toolbar";

// RiDashboardLine
import { RiDashboardLine } from "react-icons/ri";

import {
  MdOutlineNoteAlt,
  MdOutlineQuiz,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
// import { MdOutlineQuiz } from "react-icons/ms";
const drawerWidth = 240;

export default function SideDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
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
        <Toolbar>
          <List>
            <ListItem>
              <ListItemButton>
                <RiDashboardLine />
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <MdOutlineNoteAlt />
                <ListItemText primary="Assessment" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <MdOutlineQuiz />
                <ListItemText primary="My Library" />
              </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem>
              <Chip variant="outlined" color="error" label="Admin" />
            </ListItem>

            <ListItem>
              <ListItemButton>
                <MdOutlineAdminPanelSettings />
                <ListItemText primary="Round Status" />
              </ListItemButton>
            </ListItem>
          </List>
        </Toolbar>
        <Divider />
      </Drawer>
    </Box>
  );
}
