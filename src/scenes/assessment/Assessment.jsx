import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import SquareIcon from "../../components/SquareIcon";
import Heading from "../../components/assessmentOverview/heading";
import Information from "../../components/assessmentOverview/Information";
import { data } from "../../store/slices/assessmentOverView";

function Assessment() {
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
        <Box></Box>
      </Box>
    </>
  );
}

export default Assessment;
