import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store/index";
import { NavBar } from "@/components/index";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K8J5QY75VK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K8J5QY75VK');
        `}
      </Script>
      <Provider store={store}>
        <NavBar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
