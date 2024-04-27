import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { ClockIcon, StarIcon, VideoIcon } from "../UIElements/svgIcons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { TimeSpent } from "../charts/TimeSpent";
import useResponsive from "../../hooks/useResponsive";

//
const textSty = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
};

//
const BottomDashboardContents = () => {
  const theme = useTheme();
  const isMedium = useResponsive("down", "md", "xl");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMedium ? "column" : "row",
        justifyContent: "space-between",
        mt: '20px',
      }}
    >
      <Box
        sx={{
          width: isMedium ? "90%" : "45%",
          mx: "auto",
          my: isMedium ? 3 : 0,
          borderRadius: "16px",
          boxShadow: 2,
          padding: 3,
        }}
      >
        <Stack>
          <Typography variant="body2">Time Spent</Typography>
        </Stack>
        <TimeSpent />
      </Box>
      <Box
        sx={{
          width: isMedium ? "90%" : "45%",
          mx: "auto",
          my: isMedium ? 3 : 0,
          borderRadius: "16px",
          boxShadow: 2,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          sx={{ gap: "12px", my: 2 }}
          alignItems={"center"}
        >
          <img
            src="/assets/image/avatar3.png"
            alt=""
            width={34}
            height={34}
            style={{ borderRadius: "20px" }}
          />
          <Stack>
            <Typography variant="body2" sx={{ my: 0 }}>
              Lily Donovan
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: theme.palette.secondary.light, my: 0 }}
            >
              Business trainer
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body1">
          How to properly manage your personal budget?
        </Typography>
        <Stack direction="row" sx={{ my: 2, gap: "20px" }}>
          <Typography variant="caption" sx={textSty}>
            <span style={{ color: theme.palette.primary.main }}>
              <VideoIcon />
            </span>
            Video
          </Typography>
          <Typography variant="caption" sx={textSty}>
            <span style={{ color: "#00C3F8" }}>
              <ClockIcon />
            </span>
            15 mins
          </Typography>
          <Typography variant="caption" sx={textSty}>
            <span style={{ color: theme.palette.secondary.main }}>
              <StarIcon />
            </span>
            12 likes
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ my: 2 }}
        >
          <Typography variant="body2">5 days ago</Typography>
          <Button
            sx={{
              ...textSty,
              background: theme.palette.primary.main,
              borderRadius: "20px",
              padding: "10px 20px",
              gap: "12px",
              color: theme.palette.common.white,
            }}
          >
            Connect{" "}
            <ArrowForwardIosIcon
              style={{
                width: "16px",
                height: "14px",
                color: theme.palette.common.white,
              }}
            />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default BottomDashboardContents;
