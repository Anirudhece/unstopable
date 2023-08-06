import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useDispatch } from "react-redux";
import { editFieldReducer } from "../../store/slices/addAssignmentReducer";

export default function InputDrop(props) {


  const dispatch = useDispatch();
  const editField = (event) => {
    const name = props.id;
    const { value } = event.target;
    dispatch(editFieldReducer({ name, value }));
  };


  return (
    <Box mt={2} sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          value={props.innerValue}
          label="purpose"
          onChange={(e)=>{editField(e)}}
        >
          {props.value.map((ele) => {
            return <MenuItem value={ele}>{ele}</MenuItem>;
          })}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
