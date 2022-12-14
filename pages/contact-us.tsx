import Head from "next/head";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
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
        <link rel="canonical" href="https://rok-calc.com/contact-us/" />
        <meta name="robots" content="all" />
        <meta
          key="description"
          name="description"
          content="Rise of Kingdoms | Contact Us"
        />
        <meta name="keywords" content="contact us" />
        <meta property="og:url" content="https://rok-calc.com" />
        <meta property="og:title" content="Contact Us" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="692" />
        <meta property="og:title" content="Contact Us" />
        <meta
          property="og:description"
          content="Contact Us | Rise of Kingdoms"
        />
        <meta property="og:image" content="/public/assets/rok-og.webp" />
      </Head>

      <section className="flex items-center justify-center">
        <div className="mt-4 h-screen w-full md:w-1/2 ">
          <iframe
            className="overflow-hidden h-full w-full mx-auto border-0 bg-slate-500"
            src="https://docs.google.com/forms/d/e/1FAIpQLSffeAnWYJ4T-Kg98r8rrUw9EumXltLXiCejuSBuwaHK0fFOlw/viewform?embedded=true"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
