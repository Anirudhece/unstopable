import React from "react";
import { Box, Divider } from "@mui/material";
import SquareIcon from "../SquareIcon";

import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Heading from "./Heading";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

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
            <Heading size={"1.125rem"} weight={"500"} value="Math Assessment" />
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Heading size={"0.875rem"} weight={"500"} value="Job" />
              <Divider sx={{ ml: 1, mr: 1 }} orientation="vertical" flexItem />
              <CalendarMonthRoundedIcon
                sx={{
                  color: "#1C4980",
                  width: "0.875rem",
                  height: "0.875rem",
                  mr: 1,
                }}
              />
              <Heading
                color={"#8DA4BF"}
                size={"0.875rem"}
                weight={"500"}
                value="20 Apr 2023"
              />
            </Box>
          </Box>
        </Box>
        {/* *******mid row end*********** */}


      </Box>
    </Box>
  );
}

export default AssessmentWindow;
