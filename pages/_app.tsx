import React, { useEffect } from 'react';
import Head from 'next/head';
import '../public/static/css/style.scss';
// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title></title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
