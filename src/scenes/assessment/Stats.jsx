import React, { useState, useEffect } from "react";
import { Box, Divider } from "@mui/material";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import SquareIcon from "../../components/SquareIcon";
import Heading from "../../components/assessmentOverview/Heading";
import Information from "../../components/assessmentOverview/Information";
import { data } from "../../store/slices/StatesData";
function AssessmentOverview() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Box
        className="component-bellow-assessment-overcview"
        sx={{
          display: "flex",
          border: "1px solid #DADCE0 ",
          borderRadius: "15px",
          flexWrap: "wrap",
          "@media (max-width: 700px)": {
            justifyContent: "space-between",
            alignItems: "flex-start",
          },
        }}
      >
        {/* **********total assessment************** */}

        <Box
          className="Total-assessment"
          sx={{
            display: "flex",
            margin: "16px 20px",
            flexDirection: "column",
            alignItems: "flex-start",
            maxWidth: "25%",
            "@media (max-width: 700px)": {
              maxWidth: "none",
              display: "block",
              width: "40%",
              ml: "auto",
              mr: "auot",
            },
          }}
        >
          <Heading
            mb="16px"
            size={"14px"}
            weight={"600"}
            value="Total Assessment"
          />

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
        <Box
          sx={{
            display: "none",
            "@media (max-width: 700px)": {
              display: "block",
              width: "3px",
              borderLeft: "1px solid grey",
              borderRight: "1px solid grey",
              background: "#DADCE0",
              height: "110px",
            },
          }}
        ></Box>

        {/* *******total purpose (render only when screen for mobile)******  */}
        <Box
          className="Total-purpose"
          sx={{
            display: "flex",
            margin: "16px 20px",
            flexDirection: "column",
            alignItems: "flex-start",
            display: "none",
            "@media (max-width: 700px)": {
              display: "block",
              width: "40%",
              ml: "auto",
              mr: "auto",
            },
          }}
        >
          <Heading
            mb="16px"
            size={"14px"}
            weight={"600"}
            value="Total Purpose"
          />
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SquareIcon
                color={"#0073E6"}
                icon={<LinkOutlinedIcon />}
                background={"#E5F1FC"}
              />
              <Information count={data.totalPurpose.count} />
            </Box>
          </Box>
        </Box>
        {/*****total purpose (render only when screen for mobile) ends ***  */}

        {windowWidth > 700 && <Divider orientation="vertical" flexItem />}

        <Box
          sx={{
            display: "none",
            "@media (max-width: 700px)": {
              display: "block",
              width: "100%",
              borderTop: "1px solid grey",
              borderBottom: "1px solid grey",
              background: "#DADCE0",
              height: "3px",
            },
          }}
        ></Box>

        {/* *******************for candidates************** */}
        <Box
          className="candidates"
          sx={{
            display: "flex",
            margin: "16px 20px",
            flexDirection: "column",
            alignItems: "flex-start",
            "@media (max-width: 700px)": {
              width: "100%",
              ml: "12px",
              mr: "12px",
            },
          }}
        >
          <Heading mb="16px" size={"14px"} weight={"600"} value="Candidates" />
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
        {windowWidth > 700 && <Divider orientation="vertical" flexItem />}
        <Box
          sx={{
            display: "none",
            "@media (max-width: 700px)": {
              display: "block",
              width: "100%",
              borderTop: "1px solid grey",
              borderBottom: "1px solid grey",
              background: "#DADCE0",
              height: "3px",
            },
          }}
        ></Box>
        {/* ***********candidate source start************** */}
        <Box
          className="candidatesSource"
          sx={{
            display: "flex",
            margin: "16px 20px",
            flexDirection: "column",
            alignItems: "flex-start",
            "@media (max-width: 700px)": {
              width: "100%",
              ml: "12px",
              mr: "12px",
            },
          }}
        >
          <Heading
            mb="16px"
            size={"14px"}
            weight={"600"}
            value="Candidates Source"
          />
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
            margin: "16px 20px",
            flexDirection: "column",
            alignItems: "flex-start",
            "@media (max-width: 700px)": {
              display: "none",
            },
          }}
        >
          <Heading
            mb="16px"
            size={"14px"}
            weight={"600"}
            value="Total Purpose"
          />
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SquareIcon
                color={"#0073E6"}
                icon={<LinkOutlinedIcon />}
                background={"#E5F1FC"}
              />
              <Information count={data.totalPurpose.count} />
            </Box>
          </Box>
        </Box>

        {/* **********total purpose end************** */}
      </Box>
    </>
  );
}
export default AssessmentOverview;
