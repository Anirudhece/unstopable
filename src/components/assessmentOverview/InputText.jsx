import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { editFieldReducer } from "../../store/slices/addAssignmentReducer";

export default function FullWidthTextField(props) {
  const dispatch = useDispatch();

  const editField = (event) => {
    const name = props.id;
    const { value } = event.target;
    dispatch(editFieldReducer({ name, value }));
  };

  return (
    <Box
      mt={2}
      sx={{
        maxWidth: "100%",
      }}
    >
      <TextField
        onChange={(event) => editField(event)}
        fullWidth
        label={props.value}
        value={props.innerValue}
        id="fullWidth"
      />
    </Box>
  );
}
