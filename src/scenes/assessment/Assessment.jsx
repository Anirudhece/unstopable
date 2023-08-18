import React,{useState} from "react";
import { Box } from "@mui/material";
import Heading from "../../components/assessmentOverview/Heading";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { modalReducer } from "../../store/slices/addAssignmentReducer";
import Modal from "../../components/assessmentOverview/Modal";
import AssessmentWindow from "../../components/assessmentOverview/AssessmentWindow";
import AssessmentOverview from "./AssessmentOverview";
import BarChartTwoToneIcon from "@mui/icons-material/BarChartTwoTone";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import OptionIcon from "../../components/assessmentOverview/OptionIcon";
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';

function Assessment() {
  const dispatch = useDispatch();
  const { assignments } = useSelector((state) => state.AddAssignment);

  const addAssignment = (e) => {
    dispatch(modalReducer({ isOpen: true }));
  };
  const hideAssessmentOveriew=()=>{
    setrenderAssessmentOverview(!renderAssessmentOverview);
    console.log('renderAssessmentOverview:'+renderAssessmentOverview);
  }
  const [renderAssessmentOverview,setrenderAssessmentOverview]=useState(true);
  return (
    <Box sx={{ background: " #FFF" }}>
      <Box p={2}>
        <Box mb={1}>
          <Heading size={"18px"} weight={"500"} value="Assessments Overview" />
        </Box>

        {renderAssessmentOverview && <AssessmentOverview />}
      </Box>
      {/* ************my assessments begin*********** */}
      <Box p={1}>
        <Box
          mt={2}
          mb={1}
          sx={{
            display: "flex",
            alignItems: "center",
            "@media (max-width: 600px)": {
              justifyContent: "space-between",
            },
          }}
        >
          <Heading size={"18px"} weight={"500"} value="My Assessments" />
          {/* **********filter icons start******* */}
          <Box onClick={hideAssessmentOveriew}
            sx={{
              display: "flex",
              "@media (min-width: 600px)": {
                display: "none",
              },
            }}
          >
            <OptionIcon value={<SearchRoundedIcon />} />
            <OptionIcon value={<FilterAltRoundedIcon />} />
            <OptionIcon  value={<BarChartTwoToneIcon />} />
          </Box>
          {/* *********filter icons end************ */}
        </Box>
        {/* *********bellow my assessment********** */}

        <Box
          className="Bellow-myAssessment"
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {/* ***********new assessment *************** */}
          <Box
            onClick={(e) => addAssignment(e)}
            className="NewAssessment-clickable"
            m={0.2}
            sx={{
              // mb: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.75rem",
              alignSelf: "stretch",
              borderRadius: "0.75rem",
              border: "1px dashed var(--system-stroke-2, #DADCE0)",
              background: "var(--system-background, #F6F8FA)",
              cursor: "pointer",
              width: "33%",
              padding: "30px",
              "@media (max-width: 1100px)": {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "4.375rem",
                width: "4.375rem",
                padding: "0.625rem",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4.5rem",
                background: "#FFF",
              }}
            >
              <AddIcon
                sx={{
                  display: "flex",
                  height: "2.5rem",
                  width: "2.5rem",
                  flexShrink: "0",
                  color: "#0073E6",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.625rem",
              }}
            >
              <Heading size={"18px"} weight={"500"} value="New Assessment" />
            </Box>
            <Box>
              <Heading
                size={"0.75rem"}
                weight={"500"}
                align={"center"}
                value="From here you can add questions of multiple types like MCQs, 
               subjective (text or paragraph)!"
              />
            </Box>
          </Box>
          <Modal />

          {/* ***************new assement ends************ */}

          {assignments.map(
            (ele, ind) =>
              ele.id && (
                <Box
                  m={0.2}
                  sx={{
                    minWidth: "33%",
                    "@media (max-width: 1100px)": {
                      width: "100%",
                    },
                  }}
                >
                  <AssessmentWindow
                    id={ele.id}
                    assignmentName={ele.assignmentName}
                  />
                </Box>
              )
          )}
        </Box>
      </Box>
    </Box>
  );
}
export default Assessment;
