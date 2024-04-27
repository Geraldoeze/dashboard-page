import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@mui/material/styles";


export const TimeSpent = () => {
  const theme = useTheme();

  const [detail, setDetail] = useState({
    series: [
      { name: "user 1", data: [31, 40, 28, 51, 42, 109, 100] },
      { name: "user 2", data: [11, 32, 45, 32, 34, 52, 41] },
    ],
    options: {
      chart: {
        height: 200,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "daya",
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
      },

      tooltip: {
        x: {
          format: "days",
        },

        y: {
          formatter: (val) => `${val} mins`,
        },
      },
      toolbar: {
        show: false, // This line hides the toolbar controls
      },
      colors: [theme.palette.secondary.main, '#36a2eb'], // Add this line to set the colors for the series
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={detail.options}
          series={detail.series}
          type="area"
          height={200}
        />
      </div>
      {/* <div id="html-dist"></div> */}
    </div>
  );
};
