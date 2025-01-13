"use client";

import { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link"; // Ensure Link is properly imported from Next.js

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600"></div>

        <p className="mx-auto mt-6 mb-2 max-w-md text-center leading-relaxed text-slate-800 uppercase">
          Steven King Law P.C.
        </p>
        <p className="text-xs text-muted-foreground text-center uppercase">
          &copy; {new Date().getFullYear()} Steven King Law P.C. All rights reserved.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <NavLink className="text-gray-700 transition hover:text-gray-700/75" text="Home" path="/" />
          </li>

          <li>
            <NavLink className="text-gray-700 transition hover:text-gray-700/75" text="About" path="/about-page" />
          </li>

          <li>
            <NavLink className="text-gray-700 transition hover:text-gray-700/75" text="Contact" path="/contact-page" />
          </li>

          <li>
            <NavLink className="text-gray-700 transition hover:text-gray-700/75" text="Services" path="/services-page" />
          </li>
        </ul>

        {/* Social media icons */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <Link className="text-gray-400 hover:text-white" target="_blank" href="https://www.facebook.com/share/19rD3L8vhP/">
            <FacebookIcon className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>

          <Link className="text-gray-400 hover:text-white" target="_blank" href="https://www.linkedin.com/in/stevenianking?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <LinkedinIcon className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link className="text-gray-400 hover:text-white" target="_blank" href="https://www.instagram.com/kingemploymentlaw/">
            <InstagramIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

// Removed SVGProps type and used plain props instead
function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
