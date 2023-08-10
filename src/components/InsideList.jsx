import React from "react";
import { Box,ListItem,ListItemText,ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";

function InsideList(props) {
  return (
    <>
      <ListItem sx={{ justifyContent: "center" }}>
            <Link style={{ textDecoration: "none", color: "#0073E6" }} to={props.to}>
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
                  <props.icon />
                </ListItemIcon>
                <ListItemText primary={props.value} />
              </Box>
            </Link>
          </ListItem>
    </>
  );
}

export default InsideList;
