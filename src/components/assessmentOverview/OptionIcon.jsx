import React from "react";
import { Box } from "@mui/material";

function OptionIcon(props) {
  return (
    <Box
      className="cicular icon"
      sx={{
        color: "#1C4980",
        borderRadius: "50px",
        alignItems: "center",
        display: "flex",
        p: "4px",
        
      }}
    >
      {props.value}
    </Box>
  );
}

export default OptionIcon;
