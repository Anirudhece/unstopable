import React from "react";
import { Typography } from "@mui/material";
function Heading(props) {
  return (
    <>
      <Typography
        sx={{
          color: "var(--text-100, #1C4980)",
          fontFeatureSettings: "'clig' off, 'liga' off",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "140%",
          marginBottom:'16px'
        }}
      >
        {props.value}
      </Typography>
    </>
  );
}

export default Heading;
