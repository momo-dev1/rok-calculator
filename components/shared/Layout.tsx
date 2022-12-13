import Head from "next/head";
import { ScrollToTop, Footer } from "@/components/index";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setOffset } from "@/store/globalSlice";

type IProps = {
  title: string;
  children: JSX.Element;
  description?: string;
  keywords?: string;
  canonical?: string;
};

const Layout = ({
  title,
  children,
  description,
  keywords,
  canonical,
}: IProps) => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOffset({ value: layoutRef.current?.offsetTop }));
  }, [dispatch]);

  return (
    <div ref={layoutRef} className="flex flex-col gap-8 w-full">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.ico"
          color="#5bbad5"
        />
        <meta name="apple-mobile-web-app-title" content="Snippit" />
        <meta name="application-name" content="rok-calc" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href={`https://rok-calc.com/${canonical}`} />
        <meta name="robots" content="all" />
        <meta key="description" name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:url" content="https://rok-calc.com" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/public/assets/lodscalcog.webp" />
      </Head>

      <ScrollToTop />
      <main className="relative flex-1 w-full max-w-5xl px-4 m-5 mx-auto">
        <div className="rounded-2xl bg-darkCharcoal  flex flex-col items-center justify-center gap-5 p-3 pb-5">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
