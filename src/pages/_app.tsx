import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import icon from "./public/favicon.ico"
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Vanplan</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
    <Component {...pageProps} /></>;
}
