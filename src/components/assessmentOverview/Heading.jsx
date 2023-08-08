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
          fontStyle: "normal",
          fontSize: props.size,
          fontWeight: props.weight,
          lineHeight: "140%",
        }}
      >
        {props.value}
      </Typography>
    </>
  );
}

export default Heading;
