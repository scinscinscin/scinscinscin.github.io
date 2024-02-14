import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { NextSeo } from "next-seo";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lance Owen Gulinao's Portfolio</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <NextSeo
        title="Lance Owen Gulinao's Portfolio"
        openGraph={{
          title: "Lance Owen Gulinao's Portfolio",
          images: [{ url: "https://scinscinscin.github.io/meta.png" }],
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
