import React from "react";
import { Box, Divider, AvatarGroup, Avatar } from "@mui/material";
import SquareIcon from "../SquareIcon";

import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Heading from "./Heading";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import Information from "./Information";

function AssessmentWindow(props) {
  return (
    <Box
      sx={{
        borderRadius: " 0.75rem",
        border: "1px solid var(--system-stroke-2, #DADCE0)",
        background: "var(--text-white, #FFF)",
        
      }}
    >
      <Box m={2} >
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
        <Box mt={1}>
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

        <Divider variant="middle" sx={{ mt: 2, mb: 2 }} />

        {/* *********last row start************ */}

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <Information ml="0" align="left" text="Duration" count="00" />
            <Information text="Duration" count="00" />
          </Box>

          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "3.125rem",
                border: "1px solid var(--text-100, #1C4980)",
                p: 0.5,
                m: 1,
              }}
            >
              <InsertLinkOutlinedIcon
                sx={{
                  color: "#1C4980",
                  width: "1.25rem",
                  height: "1.25rem",
                  mr: 0.5,
                }}
              />
              <Heading size={"0.875rem"} weight={"500"} value="Share" />
            </Box>
            <Box>
              <AvatarGroup max={3}>
                <Avatar sx={{ bgcolor: "#6548EE" }}>LP</Avatar>
                {/* we can map the total number*/}
              </AvatarGroup>
            </Box>
          </Box>
        </Box>
        {/* last row end */}
      </Box>
    </Box>
  );
}

export default AssessmentWindow;
