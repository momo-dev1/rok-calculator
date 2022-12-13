/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import BuyMeCoffe from "/public/assets/buymeacoffe.webp";

const Footer = () => {
  return (
    <footer className="bg-darkCharcoal w-full px-2">
      <div className="md:flex-row md:max-w-5xl flex flex-col items-start gap-3 px-2 py-3 mx-auto text-white">
        <div className="flex flex-col gap-1 flex-shrink-0">
          <Link href="/contact-us">
            <a>
              <div className="hover:text-blue-400 md:mr-4 flex items-center gap-3 duration-300 cursor-pointer">
                <h2 className="font-audiowide text-2xl tracking-wide">
                  CONTACT US
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
            </a>
          </Link>
          <Link href="https://www.buymeacoffee.com/rok-calc">
            <a className="block w-32 mb-1" target="_blank" rel="noreferrer">
              <img
                className="w-full h-full"
                src={BuyMeCoffe.src}
                alt="Buy Me A Coffee"
              />
            </a>
          </Link>
        </div>

        <div className="space-x-2 text-sm sm:text-base md:text-lg">
          <span>All rights reserved</span>

          <span>
            • This is a fan site that is not associated, endorsed, or sponsored
            by Lilith games, and Lilith games is not responsible for it.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
