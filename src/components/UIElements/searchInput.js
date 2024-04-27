import React from "react";
import { SearchIcon } from "./svgIcons";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SearchInput = ({ text, handler, value, width }) => {
  const theme = useTheme();
  

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        width: 400,
        alignItems: "center",
        color: theme.palette.primary.main,
        background: theme.palette.background.paper,
        borderRadius: "20px",
        paddingY: "2px",
        paddingX: "10px",
      }}
    >
      <SearchIcon />
      <input
        style={{
          border: "none",
          outline: "none",
          height: "1.6rem",
          background: "transparent",
          color: theme.palette.primary.main,
          fontWeight: 600,
        }}
        placeholder="Search"
      />
    </Box>
  );
};
