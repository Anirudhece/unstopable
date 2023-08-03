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
    <Box p={1}>
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
        sx={{ display: "flex" }}
      >
        {/* *******************for candidates************** */}
        <Box
          className="candidates"
          sx={{
            // width: '162px',
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
                icon={<PeopleAltOutlinedIcon />}
                background={"#EBE8FD"}
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

        {/* ***********candidate source start************** */}
        <Box
          className="candidatesSource"
          sx={{
            // width: '162px',
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
      </Box>
    </Box>
  );
}

export default Assessment;
