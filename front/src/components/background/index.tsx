import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  palette: {
    background: {
      default: "#ff00ff"
    }
  }
});

function Background() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "lightGreen" }
        }}
      />
    </ThemeProvider>
  );
}

export default Background;