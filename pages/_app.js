import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import customTheme from "../styles/theme";
import { Global, css } from "@emotion/react";
import { getAnalytics } from "firebase/analytics";
import app from '../components/shared/firebase'

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
            overflow-x: hidden;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171717"};
          }
          ::-webkit-scrollbar {
            width: 0.5em;
          }

          ::-webkit-scrollbar-thumb {
            background: ${colorMode === "gray" ? "#171717" : "gray"};
            border-radius: 100vw;
          }

          // ::-webkit-scrollbar-thumb:hover {
          //   background: rgba(31, 30, 30, 0.726);
          // }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {

  const [analytics , setAnalytics] = useState(null);

  useEffect(() => {
    setAnalytics(getAnalytics(app));
  },[])

  return (
    <>
      <ChakraProvider resetCSS theme={customTheme}>
        <ColorModeProvider
          options={{
            initialColorMode: "light",
            useSystemColorMode: true,
          }}
        >
          <GlobalStyle>
            <Component {...pageProps} analytics={analytics} />
          </GlobalStyle>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
