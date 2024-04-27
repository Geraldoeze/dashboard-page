import { Stack, Box, Button } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import TopDashboardContents from "../components/dashboard/TopDashboardContents";
import TransactionSummary from "../components/dashboard/TransactionSummary";
import BottomDashboardContents from "../components/dashboard/BottomDashboardContents";
import CenterDashboardContent from "../components/dashboard/CenterDashboardContent";
import { CardIcon, SignalIcon } from "../components/UIElements/svgIcons";
import Header from "../layout/header";

export const SmallScreenDashboard = () => {
  const [page, setPage] = useState(true);
  const theme = useTheme();
  const handlePage = () => setPage(true);
  const handlePageControl = () => setPage(false);

  // Create a ref to store the reference to the div you want to scroll
  const pageContentRef = useRef(null);
  const transactionSummaryRef = useRef(null);

  useEffect(() => {
    // Scroll to the top of the rendered div content
    if (page) {
      pageContentRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      transactionSummaryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  return (
    <Box
      sx={{
        background: page
          ? theme.palette.common.white
          : theme.palette.primary.light,
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ padding: 3 }}>
        <Header />
        <Stack
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ mt: 2, mb: 2 }}
        >
          <Box
            sx={{
              boxShadow: 3,
              background: theme.palette.common.white,
              borderRadius: "16px",
              padding: 1,
            }}
          >
            <Button
              onClick={handlePage}
              style={{
                background: page ? "#00C3F8" : "",
                padding: "0",
                color: page
                  ? theme.palette.common.white
                  : theme.palette.secondary.light,
                borderRadius: "16px",
              }}
            >
              <SignalIcon />
            </Button>
            <Button
              onClick={handlePageControl}
              style={{
                background: !page ? "#00C3F8" : "",
                color: !page
                  ? theme.palette.common.white
                  : theme.palette.secondary.light,
                padding: "0",
                borderRadius: "16px",
              }}
            >
              <CardIcon />
            </Button>
          </Box>
        </Stack>
      </Box>
      <SmallScreenDashboardLayout>
        {/* Wrap the div content with a ref */}
        <div
          className={`content ${page ? "slide-in-right" : "slide-out-left"}`}
          ref={pageContentRef}
        >
          {page && (
            <>
              <TopDashboardContents />
              <CenterDashboardContent />
              <BottomDashboardContents />
            </>
          )}
        </div>
        {/* Wrap the div content with a ref */}
        <div
          className={`content ${!page ? "slide-in-left" : "slide-out-right"}`}
          ref={transactionSummaryRef}
        >
          {!page && (
            <>
              <TransactionSummary />
            </>
          )}
        </div>
      </SmallScreenDashboardLayout>
    </Box>
  );
};

const SmallScreenDashboardLayout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          
          paddingTop: "1rem",
          paddingX: 3,
          paddingBottom: "4rem",
        }}
      >
        {children}
      </Box>
    </>
  );
};
