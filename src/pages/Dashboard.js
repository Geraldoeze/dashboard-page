import { Grid } from "@mui/material";
import React from "react";
import useResponsive from "../hooks/useResponsive";
import TopDashboardContents from "../components/dashboard/TopDashboardContents";
import TransactionSummary from "../components/dashboard/TransactionSummary";
import BottomDashboardContents from "../components/dashboard/BottomDashboardContents";
import CenterDashboardContent from "../components/dashboard/CenterDashboardContent";
import { SmallScreenDashboard } from "../components/screens";

const Dashboard = () => {
  const isLarge = useResponsive("down", "lg", "xl");
  const isMedium = useResponsive("down", "md", "xl");

  return (
    <>
      {!isMedium ? (
        <Grid container sx={{ mt: 3, }}>
          <Grid
            item
            xs={isLarge ? 12 : 9}
            sx={{
              paddingRight: isLarge ? 0 : 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
             
            }}
          >
            <TopDashboardContents />
            <CenterDashboardContent />
            <BottomDashboardContents />
          </Grid>
          <Grid item xs={isLarge ? 12 : 3} sx={{ mt: isLarge ? 3 : 0 }}>
            <TransactionSummary />
          </Grid>
        </Grid>
      ) : (
        <SmallScreenDashboard />
      )}
    </>
  );
};

export default Dashboard;

