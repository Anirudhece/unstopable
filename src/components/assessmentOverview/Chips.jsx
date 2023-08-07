import React from "react";
import { Chip, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeSkillReducer } from "../../store/slices/addAssignmentReducer";

function Chips(props) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    const index = props.index;
    dispatch(removeSkillReducer({ index }));
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
          fontFamily: "Inter",
          fontSize: "0.75rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
        }}
        label={props.value}
        onDelete={handleDelete}
        deleteIcon={<CloseIcon style={{ color: "#1C4980" }} />}
      />
    </>
  );
}

export default Chips;
