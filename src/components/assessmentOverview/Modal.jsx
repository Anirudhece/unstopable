import React, { useRef, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
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
import TimeInput from "./TimeInput";

export default function Modal() {
  const dispatch = useDispatch();

  const { assignments, assignmentCount } = useSelector(
    (state) => state.AddAssignment
  );
  const assignmentGlobalState = assignments[assignmentCount];

  const { isOpen } = useSelector((state) => state.AddAssignment);
  const scroll = "body";
  const purposeDropArray = ["JOB", "INTERNSHIP", "CONTRACT"];

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
    <Dialog
      fullWidth="true"
      width="sm"
      open={isOpen}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <Box>
        <DialogTitle id="scroll-dialog-title">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              sx={{
                color: "var(--text-100, #1C4980)",
                textAlign: "center",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                display: "flex",

                "@media (max-width: 700px)": {
                  fontSize: "14px",
                  alignItems: "center",
                },
              }}
            >
              Create new assessment
            </Typography>
            <IconButton>
              <CloseOutlinedIcon onClick={handleClose} />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent Boxiders={scroll === "body"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
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
                value={purposeDropArray}
                innerValue={assignmentGlobalState.purpose}
              />
            </Box>
            <Box mb={2}>
              <Heading value="Description" />
              <InputDrop
                id="description"
                value={purposeDropArray}
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
              <TimeInput
                innerValue={assignmentGlobalState.duration}
                id="duration"
                // value="HH:MM:SS"
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
  );
}
