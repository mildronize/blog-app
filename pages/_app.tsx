import { createGlobalStyle, ThemeProvider } from 'styled-components'
import StyledNormalize from 'styled-normalize';
import { Provider } from "react-redux";
import store from "../store";
import { ThemeSwitcher } from "../components/theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <StyledNormalize /> */}
      {/* <GlobalStyle /> */}
      <Provider store={store}>
          <ThemeSwitcher>
        <Component {...pageProps} />
        </ThemeSwitcher>
        </Provider>
    </>
  )
}
