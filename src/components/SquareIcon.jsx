import React from "react";
import { Box } from "@mui/material";
function SquareIcon(props) {
  return (
    <>
      <Box
        sx={{
            display: 'flex',
            width: '40px',
            height: '40px',
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

