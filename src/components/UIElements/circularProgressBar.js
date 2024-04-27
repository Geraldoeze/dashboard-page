import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import the CSS styles for the component
import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const CircleProgress = () => {
  const percentage = 38;
  const theme = useTheme();

  return (
    <Box sx={{ width: 150, mx: "auto" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background={true}
        backgroundPadding={1}
        strokeWidth={2} // Adjust this value to change the thickness of the line
        styles={buildStyles({
          pathColor: theme.palette.primary.main, // Change this to the desired color for the progress line
          textColor: theme.palette.primary.main,
          trailColor: "#d6d6d6",
          boxShadow: "10px 10px 5px 12px #f5f5f5",
          backgroundColor: "#fff", // Change this to the desired background color
        })}
      />
    </Box>
  );
};
