import Document, { Html, Main, NextScript } from "next/document";
import Head from 'next/head';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap"
          rel="stylesheet"
        />
        <title>Ding Han's site</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;