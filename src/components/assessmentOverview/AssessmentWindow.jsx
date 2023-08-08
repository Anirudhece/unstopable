import React from "react";
import { Box, Container } from "@mui/material";
import SquareIcon from "../SquareIcon";

import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

function AssessmentWindow(props) {
  return (
    <Container>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SquareIcon
            height={50}
            width={50}
            color={"#6548EE"}
            background={"#EBE8FD"}
            icon={<BusinessCenterOutlinedIcon />}
          />
          <MoreVertOutlinedIcon />
        </Box>

        <Box></Box>
      </Box>
    </Container>
  );
}

export default AssessmentWindow;
