/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { Footer } from "@/components/index";
import Head from "next/head";
import Link from "next/link";
import { HomeList } from "@/utils/HomeData";
import HomeCard from "@/components/shared/HomeCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rise of Kingdoms (RoK) | Calculator</title>
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
        <link rel="canonical" href="https://www.rok-calc.com" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="robots" content="all" />
        <meta
          key="description"
          name="description"
          content="rok-calc helps you calculate resource packs, troops, alliance technology, buildings, speedups, healing, and tomes of knowledge."
        />
        <meta
          name="keywords"
          content="rise of kingdoms calculator, rok calculator, rok training, rok troops training, alliance technology, rok healing, rok calculate healing, rok calculate resources, rok calculate speedup, rok speedups, rok resources, rise of kindgdom healing calculator, rise of kingdom calculate resources, rise of kingdom calculate speedup"
        />
        <meta property="og:url" content="https://www.rok-calc.com" />
        <meta property="og:title" content="Home" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="rok-calc helps to calculate resource packs, building, speedups, healing, and tomes of knowledge."
        />
        <meta
          property="og:image"
          content="https://www.rok-calc.com/assets/rok-og.webp"
        />
        <meta name="author" content="MomoLk" />
      </Head>

      <section className="min-h-[calc(100vh-90px)] bg-[#222222] pt-8 text-white">
        <div className="bg-[#292929] p-10 max-w-5xl	lg:mx-auto rounded-md mb-14 mx-4 lg:text-center">
          <h1 className="md:text-5xl text-3xl">
            Rise of Kingdoms Calculator (RoK)
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-gray-200 text-sm md:text-base">
            The Rise of Kingdoms Calculator is designed to simplify your
            resource management in the game! Just select the tool you need from
            the list provided below.
          </p>
        </div>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 max-w-5xl mx-auto pb-8 px-4">
          {HomeList.map((item) => (
            <HomeCard
              key={item.name}
              name={item.name}
              url={item.url}
              text={item.text}
              src={item.src}
            />
          ))}
        </main>

        <Footer />
      </section>
    </>
  );
};

export default Home;
