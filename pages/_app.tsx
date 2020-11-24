import { Provider } from "react-redux";
import store from "../store";
import { ThemeSwitcher } from "../components/theme";
import { ThemeProvider } from '@material-ui/styles';
import theme from '../themes/material-ui';


export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <StyledNormalize /> */}
      {/* <GlobalStyle /> */}
      <Provider store={store}>
        <ThemeSwitcher>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ThemeSwitcher>
      </Provider>
    </>
  )
}
