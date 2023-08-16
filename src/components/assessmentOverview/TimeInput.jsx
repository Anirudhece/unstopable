import * as React from "react";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useDispatch } from "react-redux";
import { editFieldReducer } from "../../store/slices/addAssignmentReducer";

export default function TimeInput(props) {
  const dispatch = useDispatch();

  const editField = (event) => {
    const name = props.id;
    const { value } = event.target;
    dispatch(editFieldReducer({ name, value }));
  };

  return (
    <Box mt={2} sx={{ width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          slotProps={{ textField: { fullWidth: true } }}
          onChange={(event) => editField(event)}
          value={props.innerValue}
          label={props.value}
        />
      </LocalizationProvider>
    </Box>
  );
}
