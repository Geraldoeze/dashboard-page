// mui
import { createTheme } from "@mui/material/styles";

//
import { lightGeneralColors } from "./colors";

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...lightGeneralColors,
    common: {
      white: "#FFFFFF",
      black: "#000013",
    },
    background: {
      paper: "#716bf630",
    },
  },
  typography: {
    fontFamily: "Outfit",

    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontWeight: 800,
      lineHeight: 80 / 64,
      fontSize: pxToRem(40),
    },
    h2: {
      fontWeight: 800,
      lineHeight: 64 / 48,
      fontSize: pxToRem(32),
    },
    h3: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: pxToRem(24),
    },
    h4: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: pxToRem(20),
    },
    h5: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: pxToRem(18),
    },
    h6: {
      fontWeight: 400,
      lineHeight: 28 / 18,
      fontSize: pxToRem(17),
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(16),
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
    },
    body1: {
      lineHeight: 1.5,
      fontSize: pxToRem(16),
    },
    body2: {
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
    },
    caption: {
      lineHeight: 1.5,
      fontSize: pxToRem(12),
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(12),
      textTransform: "uppercase",
    },
    button: {
      fontWeight: 500,
      fontSize: pxToRem(14),
      height: "3rem",
      fontFamily: "Outfit",
      textTransform: "capitalize",
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
});
