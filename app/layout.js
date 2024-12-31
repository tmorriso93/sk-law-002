"use client"
import "../assets/main.css";
import Link from "next/link";
import NavLogo from "../assets/images/King Law Logo A3.png";
import Footer from "../components/Footer";
import NavLink from "../components/NavLink";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // React icons for hamburger and close icon



export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <body>
        <div className="bg-gray-200 min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
          <div className="absolute z-0 inset-0 overflow-hidden">
            <div className="circle-one blur-3xl w-64 h-64 rounded-full bg-indigo-400/20 top-0 right-28 absolute"></div>
            <div className="circle-two blur-3xl w-64 h-64 rounded-full bg-indigo-400/20 bottom-0 left-28 absolute"></div>
          </div>

          <header className="bg-[#1d2b4f] backdrop-blur z-30 h-[80px] relative">
            <div className="max-w-4xl mx-auto flex items-center justify-between h-full">
              <div className="cursor-pointer flex items-center">
                <Link href="/" passHref>
                  <Image
                    src={NavLogo}
                    alt="Logo"
                    className="w-auto h-auto pl-0 max-w-[250px] sm:max-w-[300px] md:max-w-[330px] lg:max-w-[360px] xl:max-w-[370px] 2xl:max-w-[380px]"
                  />
                </Link>
              </div>
              {/* Hamburger Icon for mobile view */}
              <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none mr-8">
                  {isMenuOpen ? (
                    <FaTimes className="w-8 h-8" />
                  ) : (
                    <FaBars className="w-8 h-8" />
                  )}
                </button>
              </div>
              {/* Desktop Menu */}
              <nav className="hidden lg:flex">
                <ul className="flex gap-x-7 text-slate-50 text-md">
                  <li>
                    <NavLink text="Home" path="/" />
                  </li>
                  <li>
                    <NavLink text="About" path="/about-page" />
                  </li>
                  <li>
                    <NavLink text="Services" path="/services-page" />
                  </li>
                  <li>
                    <NavLink text="Contact" path="/contact-page" />
                  </li>
                </ul>
              </nav>
              {/* Mobile Menu (dropdown) */}
              <nav
                className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#1d2b4f] text-slate-50 text-md transition-transform duration-300 ease-in-out transform ${
                  isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } z-50`}
              >
                <div className="absolute top-4 right-4 pr-4">
                  <button onClick={toggleMenu} className="text-white">
                    <FaTimes className="w-8 h-8" />
                  </button>
                </div>
                <ul className="flex flex-col items-center py-8 space-y-6 bg-[#1d2b4f] w-full">
                  <li>
                    <NavLink text="Home" path="/" />
                  </li>
                  <li>
                    <NavLink text="About" path="/about-page" />
                  </li>
                  <li>
                    <NavLink text="Services" path="/services-page" />
                  </li>
                  <li>
                    <NavLink text="Contact" path="/contact-page" />
                  </li>
                </ul>
              </nav>
            </div>
            <link
          href="https://fonts.googleapis.com/css2?family=Didot:wght@400;700&display=swap"
          rel="stylesheet"
        />
          </header>

          <main className="z-10 max-w-[1200px] w-full mx-auto bg-white/50 backdrop-blur rounded-md py-7 px-8 m-6 overflow-hidden relative">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
