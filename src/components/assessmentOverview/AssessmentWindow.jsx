import React from "react";
import { Box } from "@mui/material";
import SquareIcon from "../SquareIcon";

import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

function AssessmentWindow(props) {
  return (
    <Box
      sx={{
        borderRadius: " 0.75rem",
        border: "1px solid var(--system-stroke-2, #DADCE0)",
        background: "var(--text-white, #FFF)",
      }}
    >
      <Box m={2} sx={{ width: "22.5rem" }}>
        {/* ********top row begins********* */}
        <Box
          className="top-row"
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
        {/* **********top row end************ */}

        {/* *********mid row begins********* */}
        <Box>
            <Box>
                
            </Box>
        </Box>
        {/* *******mid row end*********** */}
      </Box>
    </Box>
  );
}

export default AssessmentWindow;
