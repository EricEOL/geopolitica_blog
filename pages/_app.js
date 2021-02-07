import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styleSettings from '../styleSettings.json';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  body {
    display: flex;
    flex-direction: column;

    font-family: 'Montserrat', sans-serif;;
    color: ${({theme})=> theme.colors.primary };
  }
`

const theme = styleSettings.theme;

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Geopolítica Blog</title>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
