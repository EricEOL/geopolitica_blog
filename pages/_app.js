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
      
        <meta property="og:image" content="https://images.unsplash.com/photo-1576185850227-1f72b7f8d483?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1420&q=80jA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" key="ogimage" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://geopoliticablog.vercel.app/" />
        <meta property="og:title" content="Blog de Geopolítica e História" key="ogtitle" />
        <meta property="og:description" content="Tudo para você aprender mais sobre o nosso mundo e seus conflitos" key="ogdesc" />

      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
