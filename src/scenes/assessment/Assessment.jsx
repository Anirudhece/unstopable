import React from "react";
import { Box, Divider } from "@mui/material";
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
  const { assignments } = useSelector((state) => state.AddAssignment);

  const addAssignment = (e) => {
    dispatch(modalReducer({ isOpen: true }));
  };
  return (
    <>
      <Box p={1} mt={1}>
        <Box mb={1}>
          <Heading size={"18px"} weight={"500"} value="Assessments Overview" />
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
            <Heading size={"14px"} weight={"600"} value="Total Assessment" />
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
            <Heading size={"14px"} weight={"600"} value="Candidates" />
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
            <Heading size={"14px"} weight={"600"} value="Candidates Source" />
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
            <Heading size={"14px"} weight={"600"} value="Total Purpose" />
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
          <Heading size={"18px"} weight={"500"} value="Assessments Overview" />
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
            sx={{
              mb: 1,
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
                <Box mb={0.5} sx={{ minWidth: "33%" }}>
                  <AssessmentWindow
                    id={ele.id}
                    assignmentName={ele.assignmentName}
                  />
                </Box>
              )
          )}
        </Box>
      </Box>
    </>
  );
}

export default Assessment;
