import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import SquareIcon from "../../components/SquareIcon";
import Heading from "../../components/assessmentOverview/Heading";
import Information from "../../components/assessmentOverview/Information";
import { data } from "../../store/slices/assessmentOverView";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { modalReducer } from "../../store/slices/addAssignmentReducer";
import Modal from "../../components/assessmentOverview/Modal";
import AssessmentWindow from "../../components/assessmentOverview/AssessmentWindow";

function Assessment() {
  const dispatch = useDispatch();
  const { assignmentCount, isOpen } = useSelector(
    (state) => state.AddAssignment
  );

  const addAssignment = (e) => {
    dispatch(modalReducer({ isOpen: true }));
  };
  return (
    <>
      <Box p={1} mt={1}>
        <Box mb={1}>
          <Typography
            sx={{
              color: "var(--text-100, #1C4980)",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontFamily: "Inter",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "140%",
            }}
          >
            Assessments Overview
          </Typography>
        </Box>

        <Box
          className="component-bellow-assessment-overcview"
          sx={{
            display: "flex",
            border: "1px solid #DADCE0 ",
            borderRadius: "15px",
          }}
        >
          {/* **********total assessment************** */}

          <Box
            className="Total-assessment"
            sx={{
              display: "flex",
              padding: "16px 20px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              flexShrink: "0",
              alignSelf: "stretch",
            }}
          >
            <Heading value="Total Assessment" />
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <SquareIcon
                  color={"#6548EE"}
                  background={"#EBE8FD"}
                  icon={<ViewAgendaOutlinedIcon />}
                />
                <Information count={data.totalAssessment.count} />
              </Box>
            </Box>
          </Box>

          {/* **********total assessment end************** */}
          <Divider orientation="vertical" flexItem />
          {/* *******************for candidates************** */}
          <Box
            className="candidates"
            sx={{
              display: "flex",
              padding: "16px 20px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              flexShrink: "0",
              alignSelf: "stretch",
            }}
          >
            <Heading value="Candidates" />
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <SquareIcon
                  color={"#6548EE"}
                  background={"#EBE8FD"}
                  icon={<PeopleAltOutlinedIcon />}
                />
                <Information
                  text="Total Candidates"
                  count={data.candidates.totalCandidates.count}
                  added={data.candidates.totalCandidates.added}
                />
                <Divider orientation="vertical" flexItem />
                <Information
                  text="Who Attempted"
                  count={data.candidates.whoAttempted.count}
                  added={data.candidates.whoAttempted.added}
                />
              </Box>
            </Box>
          </Box>
          {/* ************candidate end**************** */}
          <Divider orientation="vertical" flexItem />
          {/* ***********candidate source start************** */}
          <Box
            className="candidatesSource"
            sx={{
              display: "flex",
              padding: "16px 20px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              flexShrink: "0",
              alignSelf: "stretch",
            }}
          >
            <Heading value="Candidates Source" />
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <SquareIcon
                  color={"#E9407A"}
                  icon={<LanguageIcon />}
                  background={"#FCE8EF"}
                />
                <Information
                  text="E-mail"
                  count={data.candidatesSource.email.count}
                  added={data.candidatesSource.email.added}
                />
                <Divider orientation="vertical" flexItem />
                <Information
                  text="Social Share"
                  count={data.candidatesSource.socialShare.count}
                  added={data.candidatesSource.socialShare.added}
                />
                <Divider orientation="vertical" flexItem />
                <Information
                  text="Unique Link"
                  count={data.candidatesSource.uniqueLink.count}
                  added={data.candidatesSource.uniqueLink.added}
                />
              </Box>
            </Box>
          </Box>
          {/* *************candidtae source end************** */}
          <Divider orientation="vertical" flexItem />
          {/* **********total purpose start************** */}

          <Box
            className="Total-purpose"
            sx={{
              display: "flex",
              padding: "16px 20px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              flexShrink: "0",
              alignSelf: "stretch",
            }}
          >
            <Heading value="Total Purpose" />
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <SquareIcon
                  color={"#0073E6"}
                  icon={<LinkOutlinedIcon />}
                  background={"#E5F1FC"}
                />
                <Information
                  text="Total Candidates"
                  count={data.totalPurpose.count}
                />
              </Box>
            </Box>
          </Box>

          {/* **********total purpose end************** */}
        </Box>
      </Box>
            {/* ************assessments begin*********** */}
      <Box p={1}>
        <Box mt={2} mb={1}>
          <Typography
            sx={{
              color: "var(--text-100, #1C4980)",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontFamily: "Inter",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "140%",
            }}
          >
            My Assessment
          </Typography>
        </Box>
        {/* *********bellow my assessment********** */}

        <Box className="Bellow-myAssessment" sx={{ width: "fit-content",display:'flex', }}>

          {/* ***********new assessment*************** */}
          <Box
            onClick={(e) => addAssignment(e)}
            className="NewAssessment-clickable"
            sx={{
              display: "flex",
              padding: "1.875rem",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.75rem",
              flex: " 1 0 0",
              alignSelf: "stretch",

              borderRadius: "0.75rem",
              border: "1px dashed var(--system-stroke-2, #DADCE0)",
              background: "var(--system-background, #F6F8FA)",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "4.375rem",
                height: "4.375rem",
                padding: "0.625rem",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.625rem",
                borderRadius: "4.5rem",
                background: "#FFF",
              }}
            >
              <AddIcon
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
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
              <Typography
                sx={{
                  color: "var(--text-100, #1C4980)",
                  fontFeatureSettings: "'clig' off, 'liga' off",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "140%",
                }}
              >
                New Assessment
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "var(--text-100, #1C4980)",
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontSize: "0.75rem",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineWeight: "normal",
                  width: "20.5rem",
                }}
              >
                From here you can add questions of multiple types like MCQs,
                subjective (text or paragraph)!
              </Typography>
            </Box>
          </Box>
          <Modal />
          {/* ***************new assement ends************ */}

          <AssessmentWindow/>

        </Box>

      </Box>
    </>
  );
}

export default Assessment;
