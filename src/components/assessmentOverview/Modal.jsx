import React, { useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";
import Heading from "./Heading";
import InputText from "./InputText";
import InputDrop from "./InputDrop";
import Chips from "./Chips";
import TokenInput from "./TokenInput";

import { useDispatch, useSelector } from "react-redux";
import {
  modalReducer,
  saveAssessmentInvoice,
} from "../../store/slices/addAssignmentReducer";

export default function Modal() {
  const dispatch = useDispatch();

  const { assignments, assignmentCount } = useSelector(
    (state) => state.AddAssignment
  );
  const assignmentGlobalState = assignments[assignmentCount];

  const { isOpen } = useSelector((state) => state.AddAssignment);
  const scroll = "body";
  const optionDropArray = ["option1", "option2", "option3"];

  const handleClose = () => {
    dispatch(modalReducer({ isOpen: false }));
  };

  const handleSave = () => {
    const id = Date.now();
    dispatch(saveAssessmentInvoice({ id }));
    handleClose();
  };
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

  return (
    <Box>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Box
          sx={{
            width: 500,
          }}
        >
          <DialogTitle id="scroll-dialog-title">
            <Typography
              sx={{
                color: "var(--text-100, #1C4980)",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: "1.25rem",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                display: "flex",
              }}
            >
              Create new assessment
            </Typography>
          </DialogTitle>
          <DialogContent Boxiders={scroll === "body"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {/* <Box> */}
              <Box mb={2}>
                <Heading value="Name of assessment" />
                <InputText
                  value="Type here"
                  id="assignmentName"
                  innerValue={assignmentGlobalState.assignmentName}
                />
              </Box>

              <Box mb={2}>
                <Heading value="Purpose of the test is" />
                <InputDrop
                  id="purpose"
                  value={optionDropArray}
                  innerValue={assignmentGlobalState.purpose}
                />
              </Box>
              <Box mb={2}>
                <Heading value="Description" />
                <InputDrop
                  id="description"
                  value={optionDropArray}
                  innerValue={assignmentGlobalState.description}
                />
              </Box>
              <Box mb={2}>
                <Heading value="Skills" />
                <Box mt={2}>
                  {assignmentGlobalState.skills.map((ele, ind) => (
                    <Chips key={ind} value={ele} index={ind} />
                  ))}
                </Box>
                <TokenInput
                  innerValue={assignmentGlobalState.skills}
                  id="skills"
                  value="Type here"
                />
              </Box>
              <Box mb={2}>
                <Heading value="Duration of assessment" />
                <InputText
                  innerValue={assignmentGlobalState.duration}
                  id="duration"
                  value="HH:MM:SS"
                />
              </Box>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button fullWidth="true" variant="contained" onClick={handleSave}>
              save
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}
