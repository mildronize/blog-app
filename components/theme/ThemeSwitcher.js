import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../themes/Themes";

import { useThemeSwitcher } from "../theme";

import { GlobalStyles, MarkdownStyle } from "../../themes/GlobalStyles";
import { Normalize } from 'styled-normalize';

export const ThemeSwitcher = (props) => {

  const [theme, themeToggler, mountedComponent] = useThemeSwitcher();
  if(!mountedComponent) return ( <div > {props.children}</div>)

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Normalize />
      <GlobalStyles />
      <MarkdownStyle />
      {props.children}
    </ThemeProvider>
  );
};

