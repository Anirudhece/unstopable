import React from "react";
import { Box, Drawer, List, Divider, Chip } from "@mui/material";
import { RiDashboardLine } from "react-icons/ri";
import InsideList from "../../../components/InsideList";
import {
  MdOutlineNoteAlt,
  MdOutlineQuiz,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
const drawerWidth = 130;
import { toggleDrawer } from "../../../store/slices/drawerSlice";

function SideDrawer(props) {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.drawer);

  const { window } = props;

  const handleDrawerToggle = () => {
    dispatch(toggleDrawer());
  };

  const drawer = (
    <Box>
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
        <InsideList
          to="/Assessment"
          value="Assessment"
          icon={MdOutlineNoteAlt}
        />
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
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={isOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default SideDrawer;
