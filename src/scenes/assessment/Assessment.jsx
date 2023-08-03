import React from "react";
import { Box, Typography } from "@mui/material";
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import SquareIcon from "../../components/SquareIcon";

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

      <Box>
        <SquareIcon color={'#6548EE'} icon={<ViewAgendaOutlinedIcon/>} background={'#EBE8FD'} />
      </Box>
    </Box>
  );
}

export default Assessment;
