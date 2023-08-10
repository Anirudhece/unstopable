import React, { useState } from "react";
import { Box, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";

function InsideList(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const borderColor = isHovered ? "var(--secondary-1, #0073E6)" : "transparent";

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ListItem
        sx={{
          display: "flex",
          width: "80%",
          justifyContent: "center",
          border: `1px solid ${borderColor}`,
          borderRadius: "8px",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Link
          style={{ textDecoration: "none", color: "#0073E6" }}
          to={props.to}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "13px",
              
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
    </Box>
  );
}

export default InsideList;
