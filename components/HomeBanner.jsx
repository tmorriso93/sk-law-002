"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BannerImage from "../assets/images/sk-slider-001.jpg";
import BannerImage1 from "../assets/images/bgImg002.jpg";
import BannerImage2 from "../assets/images/lawyer007.jpg";
import BannerImage3 from "../assets/images/skyscraper009.jpg";
import Link from 'next/link';
import LogoImage from '../assets/images/King Law Logo A7.png';


function HomeBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [BannerImage1, BannerImage2, BannerImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <section className="relative max-w-full bg-cover bg-center bg-no-repeat h-[70vh]"> {/* Adjusted height */}
      <div className="absolute inset-0 z-0 max-h-full max-h-screen">
  <Image
    src={slides[currentSlide]}
    alt="Background"
    layout="fill"
    objectFit="cover"
    objectPosition="center"
    quality={100}
    priority={true}
    className="w-full h-full object-cover"
  />
</div>
        <div className="absolute inset-0 bg-gray-900/75 lg:bg-gray-900/75 md:bg-gray-900/75 sm:bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-[1200px] px-4 max-sm:py-20  lg:flex lg:h-full lg:items-center lg:px-8">
          <div id="content" className="max-w-xl text-center mx-auto"> {/* Centered content */}
            <div className="flex justify-center "> {/* Center the logo */}
              <Image
                src={LogoImage}
                alt="Logo"
                layout="relative"
                width={200}
                height={200}
              />
            </div>

            <div id="copy" className="mt-[-40px]">
            <h1 className="drop-shadow-md text-3xl font-extrabold text-white sm:text-5xl font-didot ">
              <strong className="block font-extrabold uppercase drop-shadow-lg text-yellow-500"> King Law </strong>
            </h1>

            <p className="font-bold drop-shadow-md mt-1 max-w-lg text-slate-50 sm:text-xl/relaxed font-didot">
              SERVING DURHAM AND GTA IN<br/> EMPLOYMENT AND FAMILY LAW MATTERS
            </p>
            <p className="font-bold drop-shadow-md mt-1 max-w-lg text-slate-50 sm:text-xl/relaxed font-didot">
              INTEGRITY.
            </p>
            <p className="font-bold drop-shadow-md mt-1 max-w-lg text-slate-50 sm:text-xl/relaxed font-didot">
              DEDICATED.
            </p>
            <p className="font-bold drop-shadow-md mt-1 max-w-lg text-slate-50 sm:text-xl/relaxed font-didot">
              PRACTICAL SOLUTIONS.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-center">
              <Link href="https://kinglawpc.cliogrow.com/book" passHref legacyBehavior >
                <a target="_blank" rel="noopener noreferrer"
                   href="#"
                  className="block font-bold w-full m-auto rounded px-12 py-3 text-sm text-white shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring sm:w-auto"
                   style={{ backgroundColor: '#1d2b4f' }}
                >
                  Book a Consultation
                </a>
              </Link>
            </div>
            </div>
          </div>
        </div>

        {/* Slider controls */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
          &#10094;
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
          &#10095;
        </button>
      </section>
    </div>
  );
}

export default HomeBanner;

