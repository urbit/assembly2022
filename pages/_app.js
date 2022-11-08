import '@styles/globals.css';
import Head from 'next/head';
import { useEffect } from "react";
import { init } from "@socialgouv/matomo-next";

const MATOMO_URL = process?.env?.NEXT_PUBLIC_MATOMO_URL || "";
const MATOMO_SITE_ID = process?.env?.NEXT_PUBLIC_MATOMO_SITE_ID || "";

function Application({ Component, pageProps }) {
  useEffect(() => {
    init({
      url: MATOMO_URL,
      siteId: MATOMO_SITE_ID,
    });
  });
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#000000" />

      </Head>

      <Component {...pageProps} />

    </>
  );
}


export default Application;
