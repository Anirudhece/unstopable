import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import { RiDashboardLine } from "react-icons/ri";

import {
  MdOutlineNoteAlt,
  MdOutlineQuiz,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";

const drawerWidth = 150;

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
          <ListItem sx={{ justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "13px"
              }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#1C4980",
                }}
              >
                <RiDashboardLine />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </Box>
          </ListItem>

          <ListItem sx={{ justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "13px",
                borderRadius: "8px",
                border: "1px solid var(--secondary-1, #0073E6)",
                background: "#E5F1FC",
              }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#0073E6",
                  
                }}
              >
                <MdOutlineNoteAlt/>
              </ListItemIcon>
              <ListItemText primary="Assessment" />
            </Box>
          </ListItem>

          <ListItem sx={{ justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "13px",
              }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#1C4980",
                }}
              >
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "13px",
              }}
            >
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#1C4980",
                }}
              >
                <MdOutlineAdminPanelSettings />
              </ListItemIcon>
              <ListItemText primary="Round Status" sx={{textAlign:'center'}} />
            </Box>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
