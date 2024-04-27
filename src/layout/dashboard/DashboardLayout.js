import React from "react";
import { Box } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Navigation, { SmallScreenNavigation } from "../nav";
import Header from "../header";

const DashboardLayout = () => {
  const isMedium = useResponsive("down", "md", "xl");
  const theme = useTheme();

  return (
    <>
      {!isMedium ? (
        <Box
          sx={{
            height: "100vh",
            background: theme.palette.primary.main,
            display: "flex",
          }}
        >
          <Box sx={{ width: "80px" }}>
            <Navigation />
          </Box>
          <Box
            sx={{
              width: "100%",
              overflowY: "auto",
              borderRadius: "35px 0 0 35px",
              background: theme.palette.common.white,
              padding:  "1.5rem",
            }}
          >
            <Header />
            <Outlet />
          </Box>
        </Box>
      ) : (
        <MediumScreenLayout />
      )}
    </>
  );
};

export default DashboardLayout;

const MediumScreenLayout = () => {
  

  return (
    <Box>
      <Outlet />
      <SmallScreenNavigation />
    </Box>
  );
};
