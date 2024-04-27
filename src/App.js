import React from "react";
import { lightTheme } from "./theme";
import { ThemeProvider } from "@mui/material";
import Router from "./routes";

function App() {
  // Detect user's preferred color scheme
  //  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  return (
    <ThemeProvider theme={lightTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
