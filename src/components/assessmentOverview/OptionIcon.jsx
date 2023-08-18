import React from "react";
import { Box, IconButton } from "@mui/material";

function OptionIcon(props) {
  return (
    <Box
      className="cicular icon"
      sx={{
        borderRadius: "50px",
        alignItems: "center",
        display: "flex",
        p: "4px",
      }}
    >
      <IconButton sx={{ color: "#1C4980" }}>{props.value}</IconButton>
    </Box>
  );
}

export default OptionIcon;
