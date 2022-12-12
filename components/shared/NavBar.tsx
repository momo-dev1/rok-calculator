/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "/public/assets/logo.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigation = [
    { name: "MGE Training", path: "/mge-training/" },
    { name: "Research", path: "/research/" },
    { name: "Building", path: "/building/" },
    { name: "SpeedUps", path: "/speed-ups/" },
  ];
  const { asPath } = useRouter();

  return (
    <header className="w-full p-4 bg-darkCharcoal">
      <div className="flex items-center justify-between mx-auto md:max-w-5xl">
        {open && (
          <div className="fixed inset-0 bg-darkCharcoal/70 z-[99999] lg:hidden"></div>
        )}

        <div className="text-2xl text-white cursor-pointer w-16">
          <Link href="/">
            <a>
              <img
                className="h-full w-full object-contain"
                width={50}
                height={50}
                src={Logo.src}
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="block text-white lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <nav
          className={`fixed top-0 lg:unset right-0 bg-ironGrey w-full max-w-xs h-full shadow-sm z-[99999] duration-300  ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-5 lg:hidden">
            <div
              onClick={() => setOpen(false)}
              className="text-2xl text-white cursor-pointer w-16"
            >
              <Link href="/">
                <a>
                  <img
                    className="h-full w-full object-contain"
                    width={50}
                    height={50}
                    src={Logo.src}
                    alt="site logo"
                  />
                </a>
              </Link>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="block text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="mb-5 border-t border-white lg:border-none lg:flex lg:items-center lg:ml-auto lg:mb-0">
            {navigation.map((item) => (
              <Link key={item.name} href={item.path}>
                <li
                  onClick={() => setOpen(false)}
                  className={`${
                    (asPath.includes("research") && item.name === "Research") ||
                    asPath === item.path
                      ? "text-yellow-500"
                      : "text-white"
                  } lg:border-none border-b border-white py-3 px-5 cursor-pointer`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
