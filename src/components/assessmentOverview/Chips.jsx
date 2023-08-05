import React from "react";
import { Chip, Box } from "@mui/material";
function Chips(props) {
  const handleDelete = () => {
    console.log("deleting" + props.id);
  };
  return (
    <>
      <Chip
        sx={{
          padding: " 0.375rem 0.5rem 0.375rem 0.625rem",
          margin: "0.625rem",
          color: "#1C4980",
          gap: "0.125rem",
          background: "#DDEDFF",
        }}
        label={props.value}
        onDelete={handleDelete}
        // deleteIcon={<CloseIcon/>}
      />
    </>
  );
}

export default Chips;
