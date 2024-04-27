import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

import useResponsive from "../../hooks/useResponsive";

const CardContainer = () => {
  const theme = useTheme();
  const isLarge = useResponsive("down", "lg", "xl");
  return (
    <Box
      sx={{
        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.error.main})`,
        my: 4,
        padding: 3,
        borderRadius: "16px",

        width: isLarge ? 250 : "80%",
        
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <span>
          <img
            src="/assets/image/chip-icon.svg"
            alt=""
            width={"35px"}
            height={"25px"}
          />
        </span>
        <span>
          <img
            src="/assets/image/visa-icon.svg"
            alt=""
            width={"35px"}
            height={"25px"}
          />
        </span>
      </Stack>
      <Stack
        direction={"row"}
        sx={{ my: 3 }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <span style={{ display: "flex", gap: "4px" }}>
          <DotIcon /> <DotIcon /> <DotIcon /> <DotIcon />
        </span>
        <span style={{ display: "flex", gap: "4px" }}>
          <DotIcon /> <DotIcon /> <DotIcon /> <DotIcon />
        </span>
        <span style={{ display: "flex", gap: "4px" }}>
          <DotIcon /> <DotIcon /> <DotIcon /> <DotIcon />
        </span>

        <Typography variant="body2" sx={{ color: "white", fontWeight: 600 }}>
          9546
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="body2" sx={{ fontWeight: 600, color: "white" }}>
          Alex Smith
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600, color: "white" }}>
          07/24
        </Typography>
      </Stack>
    </Box>
  );
};

export default CardContainer;

const DotIcon = () => {
  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "10px",
        width: "3px",
        height: "3px",
      }}
    />
  );
};
