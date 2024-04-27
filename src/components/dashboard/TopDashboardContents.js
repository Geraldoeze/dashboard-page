import { Box, Typography, Stack } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import LineChart from "../charts/LineChart";
import useResponsive from "../../hooks/useResponsive";

const mock_data = [
  {
    text: "VISITORS",
    value: "10,320",
    data: [40, 90, 60],
  },
  {
    text: "CUSTOMERS",
    value: "4,628",
    data: [95, 55, 80],
  },
  {
    text: "ORDERS",
    value: "2,980",
    data: [70, 90, 58],
  },
];

const TopDashboardContents = () => {
  const [select, setSelect] = useState("ORDERS");
  const theme = useTheme();
  const isMedium = useResponsive("down", "md", "xl");

  const handleSelect = (text) => {
    setSelect(text);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {mock_data?.map((val, id) => (
        <Box
          onClick={() => handleSelect(val.text)}
          key={id}
          sx={{
            boxShadow: 2,
            mx: select === val.text ? "20px" : "0",
            minWidth: isMedium ? 65 : 200,
            borderRadius: "16px",
            padding: "10px",
            display: "flex",
            transition: "transform 0.3s ease-in-out",
            transform: select === val.text ? "scale(1.2)" : "scale(1)",
            flexDirection: isMedium ? "column-reverse" : "row",
            gap: "10px",
            background:
              select === val?.text
                ? theme.palette.secondary.main
                : theme.palette.common.white,
          }}
        >
          <LineChart data={val?.data} active={select === val?.text} />
          <Stack>
            <Typography
              sx={{
                fontSize: "10px",
                color: select === val?.text ? "white" : "#C4BDD5",
                fontFamily: "Outfit",
              }}
            >
              {val.text}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                color: select === val?.text ? "white" : "#000013",
                fontFamily: "Outfit",
              }}
            >
              {val.value}
            </Typography>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default TopDashboardContents;
