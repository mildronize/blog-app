import { useEffect, useState } from "react";

import { actions, selector } from "../../store";
import { useSelector, useDispatch } from "react-redux";

export const useThemeSwitcher = () => {
  const dispatch = useDispatch();
  const themeState = useSelector(selector);

  const theme = themeState.themeMode;
  const setTheme = (theme) => dispatch(actions.setTheme(theme));

  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
    setMountedComponent(true);
  }, []);

  const themeToggler = () => {
    console.log(`themeToggler ${theme}`);
    theme === "light" ? setMode("dark") : setMode("light");
  };

  return [theme, themeToggler, mountedComponent];
};
