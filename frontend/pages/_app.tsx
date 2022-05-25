import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
