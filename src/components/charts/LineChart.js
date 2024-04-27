import React from "react";
import Chart from "react-apexcharts";
import { useTheme } from "@mui/material/styles";


const LineChart = ({data=[], active=false}) => {
    const theme = useTheme();

    const chartData = {
        series: [{
          name: "Wave",
          data: data
        }],
        options: {
          chart: {
            type: 'area',
            height: 50,
            width: 65,
            sparkline: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          colors: [active ? theme.palette.common.white : theme.palette.primary.main],
          xaxis: {
            labels: {
              show: false
            },
            axisBorder: {
              show: false
            }
          },
          yaxis: {
            min: 0,
            max: 100,
            tickAmount: 6, // Adjust the number of ticks as needed
            labels: {
              show: false,
              formatter: function(value) {
                if (value === 0 || value === 100) {
                  return value;
                }
                return ''; // Hide other y-axis labels
              }
            }
          }
        }
      };
      

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={chartData.options.chart.height}
        width={chartData.options.chart.width}
      />
    </div>
  );
};

export default LineChart;
