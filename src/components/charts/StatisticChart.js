import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useResponsive from "../../hooks/useResponsive";

const StatisticChart = () => {
  const theme = useTheme();
  const isMedium = useResponsive("down", "md", "xl")
  const [state, setState] = useState({
    series: [
      {
        name: "Net Profit",
        data: generateMonthlyData(2018),
      },
    ],
    options: {
      plotOptions: {
        bar: {
          columnWidth: "10%",
          borderRadius: 4,
          borderRadiusTopLeft: 10,
          borderRadiusTopRight: 10,
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: [
          "Nov",
          "Dec",
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
        ],
      },
      tooltip: {
        y: {
          formatter: (val) => `$ ${val}`,
        },
      },
      toolbar: {
        show: false, // This line hides the toolbar controls
      },
    },
    isMonthly: false,
  });

  const toggleXAxis = () => {
    setState((prevState) => ({
      ...prevState,
      series: [
        {
          name: "Net Profit",
          data: prevState.isMonthly
            ? generateYearlyData(2018, 2022)
            : generateMonthlyData(2018),
        },
      ],
      options: {
        ...prevState.options,
        xaxis: {
          ...prevState.options.xaxis,
          categories: prevState.isMonthly
            ? ["2018", "2019", "2020", "2021", "2022"]
            : ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
      },
      isMonthly: !prevState.isMonthly,
    }));
  };

  return (
    <Box
      sx={{
        background: isMedium ? theme.palette.common.white : theme.palette.primary.light,
        borderRadius: "20px",
        paddingX:  3,
        mt: '20px'
      }}
    >
      <Stack
        direction={"row"}
        alignItems={'center'}
        justifyContent={"space-between"}
        sx={{ mb: 2, padding: 2 }}
      >
        <Typography variant="body2">Statistic</Typography>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: isMedium ? theme.palette.primary.light : theme.palette.common.white,
            borderRadius: "20px",
            paddingX: "20px",
            gap: "4px",
          }}
          onClick={toggleXAxis}
        >
          {state.isMonthly ? "Year" : "Month"}
          <ArrowForwardIosIcon style={{fontSize: '16px'}} />
        </Button>
      </Stack>
      <Box sx={{ background: theme.palette.primary.light, padding: 1 }}>
        <ReactApexChart
          type="bar"
          series={state.series}
          options={state.options}
          height={200}
        />
      </Box>
    </Box>
  );
};

// function to generate random monthly data
const generateMonthlyData = (year) => {
  const data = [];
  for (let month = 0; month < 9; month++) {
    const value = Math.floor(Math.random() * 80) + 20; // Range: 20 - 100
    data.push(value);
  }
  return data;
};

// function to generate random yearly data
const generateYearlyData = (startYear, endYear) => {
  const data = [];
  for (let year = startYear; year <= endYear; year++) {
    const value = Math.floor(Math.random() * 90) + 10; // Range: 10 - 100
    data.push(value);
  }
  return data;
};

export default StatisticChart;
