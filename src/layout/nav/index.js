import React from "react";
import { navConfig } from "./config";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { MainLogo, MainLogoTwo } from "../../components/UIElements/svgIcons";

const Navigation = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  //   function to check route path
  const isCurrentPath = (path) => {
    return location.pathname.startsWith(path);
  };

  // function to handle route navigation
  const handlePathNavigate = (path) => {
    navigate(path);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      <Box sx={{ height: "40px", display: "flex", position: "relative" }}>
        <span style={{ position: "absolute", zIndex: 2, left: 1, top: 1 }}>
          <MainLogo />
        </span>
        <span
          style={{
            color: theme.palette.primary.light,
            marginLeft: "10px",
            marginBottom: "4px",
          }}
        >
          <MainLogoTwo />
        </span>
      </Box>
      <Box
        sx={{
          height: "80%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {navConfig?.map((val) => (
          <Box key={val.id} sx={{ position: "relative" }}>
            <Box
              onClick={() => handlePathNavigate(val?.path)}
              sx={{
                my: 3,
                cursor: "pointer",
                background: isCurrentPath(val.path)
                  ? theme.palette.common.white
                  : "",
                padding: "14px",
                position: isCurrentPath(val.path) ? "relative" : "",
                right: "-20px",
                borderRadius: "10px",
                boxShadow: isCurrentPath(val.path) ? 2 : 0,
                color: isCurrentPath(val.path)
                  ? theme.palette.secondary.main
                  : theme.palette.text.secondary,
              }}
            >
              {val.icon}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Navigation;

export const SmallScreenNavigation = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentPath = (path) => {
    return location.pathname.startsWith(path);
  };
  const handlePathNavigate = (path) => {
    navigate(path);
  };
  return (
    <Box
      sx={{
        padding: '0',
        background: theme.palette.primary.main,
        position: "fixed",
        borderRadius: '30px',
        width: "100%",
        bottom: -1,
        left: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        {navConfig?.map((val, id) => (
          <Box key={val.id} sx={{ position: "relative", width: "20%" }}>
            <Box
              onClick={() => handlePathNavigate(val?.path)}
              sx={{
                my: 1,
                cursor: "pointer",
                background: isCurrentPath(val.path)
                  ? theme.palette.common.white
                  : "",
                padding: "14px",
                width: "30px",
                mx: "auto",
                position: isCurrentPath(val.path) ? "relative" : "",
                top: '-20px',
                borderRadius: "10px",
                boxShadow: isCurrentPath(val.path) ? 2 : 0,
                color: isCurrentPath(val.path)
                  ? theme.palette.secondary.main
                  : theme.palette.text.secondary,
              }}
            >
              {val.icon}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
