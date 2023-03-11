/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link"
const NavBar = () => {
  const router = useRouter();
  const [path] = useState(router.pathname);
  
  return (
    <nav className="bg-white px-2 sm:px-4 py-5 top-0 fixed z-20 w-full  shadow shadow-teal-200">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className={`flex items-center `}>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-10 mr-3 sm:h-9"
            alt="Logo"
          />
          <span className="self-center text-4xl font-semibold whitespace-nowrap">
            LLC
          </span>
        </Link>
        {/* Hamburger */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>

          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm uppercase md:font-medium md:border-0 md:bg-white">
            <li>
              <Link
                href="/"
                className={`block py-2 pl-3 pr-4 rounded md:p-1 hover:bg-blue-100  transition-all ${
                  path == "/"
                    ? "text-white md:text-blue-700 bg-blue-700 md:bg-gray-100"
                    : "text-gray-700 "
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className={`block py-2 pl-3 pr-4 rounded md:p-1 hover:bg-blue-100  transition-all ${
                  path == "/aboutus"
                    ? "text-white md:text-blue-700 bg-blue-700 md:bg-gray-100"
                    : "text-gray-700 "
                }`}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className={`block py-2 pl-3 pr-4 rounded md:p-1 hover:bg-blue-100  transition-all ${
                  path == "/careers"
                    ? "text-white md:text-blue-700 bg-blue-700 md:bg-gray-100"
                    : "text-gray-700 "
                }`}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/investors"
                className={`block py-2 pl-3 pr-4 rounded md:p-1 hover:bg-blue-100  transition-all ${
                  path == "/investors"
                    ? "text-white md:text-blue-700 bg-blue-700 md:bg-gray-100"
                    : "text-gray-700 "
                }`}
              >
                Investors
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block py-2 pl-3 pr-4 rounded md:p-1 hover:bg-blue-100  transition-all ${
                  path == "/blog" || path == "/blog/[id]"
                    ? "text-white md:text-blue-700 bg-blue-700 md:bg-gray-100"
                    : "text-gray-700 "
                }`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
