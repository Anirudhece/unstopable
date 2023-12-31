import React from "react";
import { Box } from "@mui/material";
function SquareIcon(props) {
  return (
    <>
      <Box
        sx={{
            display: 'flex',
            width: props.width?props.width:40,
            height: props.height?props.height:40,
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:'8px',
            background: props.background,
            color:props.color,
        }}
      >
        {props.icon}
      </Box>
      <Box></Box>
    </>
  );
}

export default SquareIcon;
