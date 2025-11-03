import { useMemo, type ReactNode } from "react";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type { Theme } from "@mui/material/styles";
import Palette from "./palette";
import Typography from "./typography";
import type { ThemeOptions } from "@mui/material/styles";
import componentStyleOverrides from "./compStyleOverrides";

interface Props {
  children: ReactNode;
}

export default function CustomTheme({ children }: Props) {
  const borderRadius = 12;
  const fontFamily = "'Rubik', sans-serif";

  const theme: Theme = useMemo<Theme>(() => Palette(), []);

  const themeTypography = useMemo(() => Typography(fontFamily), [fontFamily]);

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      spacing: 8,
      palette: theme.palette,
      typography: themeTypography,
    }),
    [theme, themeTypography]
  );

  const themes: Theme = createTheme(themeOptions);
  themes.components = useMemo(
    () => componentStyleOverrides(themes, borderRadius, true),
    [themes, borderRadius]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
