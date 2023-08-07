import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "@reduxjs/toolkit";
import { addSkillReducer } from "../../store/slices/addAssignmentReducer";
import { Box } from "@mui/material";

export default function TokenInput(props) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      const { value } = event.target;
      dispatch(addSkillReducer({ value }));
      setInputValue(""); // Clear the input after adding the skill
    }
  };

  return (
    <Box mt={2}>
      <TextField
        label="Add a skill"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        fullWidth
      />
    </Box>
  );
}
