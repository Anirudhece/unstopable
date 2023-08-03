import React from "react";
import { Box, Typography } from "@mui/material";
function Information({ count, added, text }) {
  return (
    <>
      <Box ml={1.3} mr={1.3} >
        <Box sx={{display:'flex',alignItems:'center'}}>
          {count && (
            <Typography
              sx={{
                color: "var(--text-100, #1C4980)",
                fontFeatureSettings: "'clig' off, 'liga' off",
                fontFamily: "Inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "140%",
              }}
            >
              {count}
            </Typography>
          )}
          {added && (
            <Typography
              sx={{
                color: "var(--status-success, #05C165)",
                fontFeatureSettings: "'clig' off, 'liga' off",
                fontFamily: "Inter",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "140%",
                alignItems:'center',
              }}
            >
              {added > 0 ? "+" : "-"}
              {added}
            </Typography>
          )}
        </Box>
        <Box>
          {text && (
            <Typography
              sx={{
                color: "#1C4980",
                fontFeatureSettings: "'clig' off, 'liga' off",
                fontFamily: "Inter",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "140%",
              }}
            >
              {text}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Information;
