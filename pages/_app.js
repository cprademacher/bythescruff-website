import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    background-color: #eee;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
