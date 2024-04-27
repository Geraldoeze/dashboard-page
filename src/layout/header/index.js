import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { SearchInput } from "../../components/UIElements/searchInput";
import BadgeNotification from "./badge";
import useResponsive from "../../hooks/useResponsive";
import {  MainLogoTwo, SmallScreenMainLogo } from "../../components/UIElements/svgIcons";

const Header = () => {
  const theme = useTheme();
  const isMedium = useResponsive("down", "md", "xl");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {isMedium && (
         <Box sx={{ height: "40px", display: "flex", position: "relative" }}>
          <span style={{ position: "absolute", zIndex: 2, left: 1, top: 1, color: theme.palette.primary.main, }}>
            <SmallScreenMainLogo />
          </span>
          <span
            style={{
              color: theme.palette.primary.light,
              marginLeft: "10px",
              marginBottom: "4px",
            }}
          >
            <MainLogoTwo />
          </span>
        </Box>
      )}
      {!isMedium && (
        <Stack direction="row">
          <SearchInput />
          <Stack
            direction="row"
            justifyContent={"space-around"}
            sx={{ fontFamily: "Roboto", gap: "20px", marginLeft: 4 }}
          >
            <Button sx={{ color: theme.palette.common.black }}>Feedback</Button>
            <Button sx={{ color: theme.palette.common.black }}>Contacts</Button>
            <Button sx={{ color: theme.palette.common.black }}>Help</Button>
          </Stack>
        </Stack>
      )}
      <Stack direction={"row"} alignItems={"center"}>
        <BadgeNotification />
        <Box sx={{ padding: 0, marginLeft: 2, cursor: "pointer" }}>
          <img
            src="/assets/image/avatar-img.png"
            alt="icon"
            width={40}
            height={40}
            style={{ borderRadius: "100px" }}
          />{" "}
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
