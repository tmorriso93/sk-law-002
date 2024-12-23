"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BannerImage from "../assets/images/sk-slider-001.jpg";
import BannerImage1 from "../assets/images/bgImg002.jpg";
import BannerImage2 from "../assets/images/lawyer006.jpg";
import BannerImage3 from "../assets/images/Durham-Courthouse002.jpg";
import Link from 'next/link';
import LogoImage from '../assets/images/King Law Logo A7.png';


function HomeBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [BannerImage1, BannerImage2, BannerImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
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
        <div className="absolute inset-0 z-0 max-h-full">
          <Image
            src={slides[currentSlide]}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </div>
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-[1200px] px-4 max-sm:py-20  lg:flex lg:h-full lg:items-center lg:px-8">
          <div id="content" className="max-w-xl text-center mx-auto"> {/* Centered content */}
            <div className="flex justify-center"> {/* Center the logo */}
              <Image
                src={LogoImage}
                alt="Logo"
                layout="intrinsic"
                width={150}
                height={150}
              />
            </div>

            <h1 className="drop-shadow-md text-3xl font-extrabold text-white sm:text-5xl">
              <strong className="block font-extrabold uppercase drop-shadow-md text-yellow-500"> King Law </strong>
            </h1>

            <p className="font-bold drop-shadow-md mt-1 max-w-lg text-white sm:text-xl/relaxed">
              SERVING DURHAM AND GTA IN<br/> EMPLOYMENT AND FAMILY LAW MATTERS
            </p>
            <p className="font-bold drop-shadow-md mt-1 max-w-lg text-white sm:text-xl/relaxed">
              INTEGRITY.
            </p>
            <p className="font-bold drop-shadow-md mt-1 max-w-lg text-white sm:text-xl/relaxed">
              DEDICATED.
            </p>
            <p className="font-bold drop-shadow-md mt-1 max-w-lg text-white sm:text-xl/relaxed">
              PRACTICAL SOLUTIONS.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-center">
              <Link href="https://kinglawpc.cliogrow.com/book" passHref legacyBehavior >
                <a target="_blank" rel="noopener noreferrer"
                   href="#"
                   className="block font-bold w-full m-auto rounded px-12 py-3 text-sm text-white shadow hover:opacity-95 focus:outline-none focus:ring sm:w-auto"
                   style={{ backgroundColor: '#1d2b4f' }}
                >
                  Book a Consultation
                </a>
              </Link>
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

