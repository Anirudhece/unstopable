import React, { useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";
import Heading from "../../components/assessmentOverview/Heading";
import InputText from "../../components/assessmentOverview/InputText";
import InputDrop from "../../components/assessmentOverview/InputDrop";

import { useDispatch, useSelector } from "react-redux";
import { modalReducer } from "../../store/slices/addAssignmentReducer";

export default function Modal() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.AddAssignment);
  const scroll = "body";
  const optionArray = ["option1", "option2", "option3"];

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(modalReducer({ isOpen: false }));
    console.log(isOpen);
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
    <div>
      <Dialog
        open={isOpen}
        onClose={(e) => {
          handleClose(e);
        }}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
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
            }}
          >
            Create new assessment
          </Typography>
        </DialogTitle>
        <DialogContent dividers={scroll === "body"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box>
              <Heading value="Name of assessment" />
              <InputText value="Type here" />
            </Box>

            <Box>
              <Heading value="Purpose of the test is" />
              <InputDrop value={optionArray} />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
