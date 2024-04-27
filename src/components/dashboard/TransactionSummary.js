import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { EditIcon, PlusIcon } from "../UIElements/svgIcons";
import { transactionSummaryData } from "../../data/transactionSummary";
import CardContainer from "../UIElements/cardContainer";
import { CircleProgress } from "../UIElements/circularProgressBar";
import useResponsive from "../../hooks/useResponsive";

const TransactionSummary = () => {
  const theme = useTheme();
  const isMedium = useResponsive("down", "md", "xl");

  return (
    <Box
      sx={{
        background: theme.palette.primary.light,
        padding: isMedium ? "20px" : 4,
        borderRadius: "16px",
      }}
    >
      {!isMedium && (
        <Stack direction={"row"} justifyContent={"end"}>
          <span
            style={{ cursor: "pointer", color: theme.palette.text.primary }}
          >
            <EditIcon />
          </span>
        </Stack>
      )}
      {isMedium && (
        <Stack sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, textAlign: "center" }}
          >
            Total Sales
          </Typography>
        </Stack>
      )}
      <Stack sx={{ position: "relative", mt: 3 }}>
        <Box sx={{ position: "absolute", right: isMedium ? 1 : "-40px" }}>
          <span
            style={{
              background: theme.palette.primary.main,
              borderRadius: "10px",
              padding: 10,
              fontSize: "12px",
              fontWeight: 600,
              color: theme.palette.common.white,
            }}
          >
            $10,600
          </span>
        </Box>
        <CircleProgress />
      </Stack>

      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          sx={{
            fontWeight: 500,
            color: "#000013",
            fontFamily: "Outfit",
          }}
        >
          My card
        </Typography>
        <span style={{ color: "#000" }}>..</span>
      </Stack>
      <CardContainer />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography
          sx={{
            fontWeight: 500,
            color: "#000013",
            fontFamily: "Outfit",
          }}
        >
          Transaction
        </Typography>
        <span
          style={{ color: theme.palette.secondary.main, cursor: "pointer" }}
        >
          <PlusIcon />
        </span>
      </Stack>
      {transactionSummaryData?.map((val, id) => (
        <SummaryInfo key={id} data={val} />
      ))}
    </Box>
  );
};

export default TransactionSummary;

const SummaryInfo = ({ data }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ color: theme.palette.common.black, my: 3 }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Box sx={{ width: 40 }}>
          <span
            style={{
              padding: "0.5rem",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme.palette.secondary.main,
              background: theme.palette.common.white,
            }}
          >
            {data?.icon}
          </span>
        </Box>{" "}
        <Stack sx={{ marginLeft: 2 }}>
          <Typography variant="body2">{data?.desc}</Typography>
          <Typography
            variant="caption"
            sx={{ color: theme.palette.secondary.light }}
          >
            {data?.time}
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>
        {data?.amount}
      </Typography>
    </Stack>
  );
};
