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
  const [page, setPage] = useState('dashboard');
  const theme = useTheme();
  const handlePage = () => setPage('dashboard');
  const handlePageControl = () => setPage('transactions');

  return (
    <Box
      sx={{
        background: page === 'dashboard' ? theme.palette.common.white : theme.palette.primary.light,
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ padding: 3, }}>
        <Header />
        <Stack direction="row" justifyContent={'center'} alignItems={'center'} sx={{ mt: 2, mb: 2 }}>
          <Box
            sx={{
              boxShadow: 3,
              background: theme.palette.common.white,
              borderRadius: '16px',
              padding: 1,
            }}
          >
            <Button
              onClick={handlePage}
              style={{
                background: page === 'dashboard' ? '#00C3F8' : '',
                padding: '0',
                color: page === 'dashboard' ? theme.palette.common.white : theme.palette.secondary.light,
                borderRadius: '16px',
              }}
            >
              <SignalIcon />
            </Button>
            <Button
              onClick={handlePageControl}
              style={{
                background: page === 'transactions' ? '#00C3F8' : '',
                color: page === 'transactions' ? theme.palette.common.white : theme.palette.secondary.light,
                padding: '0',
                borderRadius: '16px',
              }}
            >
              <CardIcon />
            </Button>
          </Box>
        </Stack>
      </Box>
      <SmallScreenDashboardLayout page={page}>
        {page === 'dashboard' && (
          <>
            <TopDashboardContents />
            <CenterDashboardContent />
            <BottomDashboardContents />
          </>
        )}
        {page === 'transactions' && (
          <>
            <TransactionSummary />
          </>
        )}
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
