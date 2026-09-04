import * as React from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

export interface ThemeProviderProps {
  children?: React.ReactNode;
}

const theme = createTheme();

export function ThemeProvider({
  children,
}: ThemeProviderProps): React.JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
