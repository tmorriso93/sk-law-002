// import React from 'react';
// import Image from 'next/image';
// import BannerImage from "../assets/images/sk-slider-001.jpg";

// function HomeBanner() {
//   return (
//     <div>
//       {/* <section
//         className="relative max-w-full bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat"
//       > */}
//       <section
//         className="relative max-w-full  bg-cover bg-center bg-no-repeat"
//       >
//          <div className="absolute inset-0 z-0 max-h-full">
//         <Image
//           src={BannerImage}
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           priority={true}
//         />
//       </div>
//         <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

//         <div className="relative mx-auto max-w-[1200px] px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
//           <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
//             <h1 className="drop-shadow-md text-3xl font-extrabold text-white sm:text-5xl">
              
//               <strong className="block font-extrabold uppercase drop-shadow-md text-yellow-500"> King Law </strong>
//             </h1>

//             <p className="font-bold drop-shadow-md mt-4 max-w-lg text-white sm:text-xl/relaxed">
//             DURHAM & GTA
//             </p>
//             <p className="font-bold drop-shadow-md mt-4 max-w-lg text-white sm:text-xl/relaxed">
//             EMPLOYMENT LAW
//             </p>
//             <p className="font-bold drop-shadow-md mt-4 max-w-lg text-white sm:text-xl/relaxed">
//             FAMILY LAW LAWYER
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4 text-center">
//               <a
//                 href="#"
//                 className="block w-full m-auto rounded px-12 py-3 text-sm font-medium text-white shadow hover:opacity-95 focus:outline-none focus:ring  sm:w-auto"  style={{ backgroundColor: '#1d2b4f' }}
//               >
//                 Book a Consultation
//               </a>

             
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default HomeBanner;

import React from 'react';
import Image from 'next/image';
import BannerImage from "../assets/images/sk-slider-001.jpg";
import Link from 'next/link';
import LogoImage from '../assets/images/King Law Logo A7.png';

function HomeBanner() {
  return (
    <div>
      <section className="relative max-w-full bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 z-0 max-h-full">
          <Image
            src={BannerImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </div>
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-[1200px] px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-left"> {/* Changed to text-left */}

             <Image
            src={LogoImage}
            alt="Logo"
            layout="intrinsic"
            width={150}
            height={150}
          />

            <h1 className="drop-shadow-md text-3xl font-extrabold text-white sm:text-5xl">
              <strong className="block font-extrabold uppercase drop-shadow-md text-yellow-500"> King Law </strong>
            </h1>

            <p className="font-bold drop-shadow-md mt-2 max-w-lg text-white sm:text-xl/relaxed">
              DURHAM & GTA
            </p>
            <p className="font-bold drop-shadow-md mt-2 max-w-lg text-white sm:text-xl/relaxed">
              EMPLOYMENT LAW
            </p>
            <p className="font-bold drop-shadow-md mt-2 max-w-lg text-white sm:text-xl/relaxed">
              FAMILY LAW LAWYER
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link href="https://kinglawpc.cliogrow.com/book" passHref legacyBehavior>
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
      </section>
    </div>
  );
}

export default HomeBanner;

