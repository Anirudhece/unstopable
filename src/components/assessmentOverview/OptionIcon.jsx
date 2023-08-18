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
        border: props.highlight ? "1px solid #0073E6" : null,
      }}
    >
      <IconButton sx={{ color: props.highlight ? "#0073E6" : "#1C4980" }}>
        {props.value}
      </IconButton>
    </Box>
  );
}

export default OptionIcon;
