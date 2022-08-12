import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

import '../styles/globals.css';
import { Navbar, Footer } from '../components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/2120c8990b.js" crossOrigin="anonymous" />
  </ThemeProvider>
);

export default MyApp;
