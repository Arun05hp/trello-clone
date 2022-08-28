import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

const theme = extendTheme({
  colors: {
    brand: "#172b4d",
    skyblue: "#0065ff",
    skydarkblue: "#0747a6",
    darkblue: "#eae6ff",
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
