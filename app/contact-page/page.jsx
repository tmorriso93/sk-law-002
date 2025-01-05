"use client"
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';
import LogoImage from '../../assets/images/King Law Logo A7.png';

export default function Page() {

    const [state, handleSubmit] = useForm("mlddoprl");
  if (state.succeeded) {
      return ( 
        <>
       {/* <p>Thanks for your Enquiry!</p> */}
       <div className="flex flex-col items-center justify-center space-y-0">
        {/* <h1 className="drop-shadow-md text-3xl font-extrabold text-white sm:text-5xl">
          <strong className="block font-extrabold uppercase drop-shadow-md text-yellow-400">King Law</strong>
        </h1> */}
        <Image
          src={LogoImage}
          alt="Logo"
          layout="intrinsic"
          width={150}
          height={150}
        />
        <p className="max-w-xl text-xl text-slate-700 text-center">
        Your message has been sent successfully. Our team will review it and get back to you soon.
        </p>
      </div>
      </>
      );
  }

  return (
      <div>
      <section className="bg-gray-100">
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
    <div className="lg:col-span-2 lg:py-12">

      <h3 className="text-2xl font-bold my-2 uppercase text-gray-800">Send Us a Message</h3>
      <p className="max-w-xl text-lg text-slate-700">
      Need legal assistance? Our experienced team is here to help you navigate your legal issues with confidence. Reach out now to discuss your case.
      </p>

      <div className="mt-8">
        <a href="tel:+14379009259" className="text-2xl font-bold text-[#1d2b4f]"> (437) 900-9259 </a>
        <div className="space-y-2 mt-2">
        <address className="not-italic text-slate-700">
          50 Richmond St. East,
          <br />
          Suite 119,
          <br />
          The Firms,
          <br />
          Oshawa, ON L1G 7C7
        </address>
      </div>

      </div>
    </div>

    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
      <form 
        action="#" 
        className="space-y-4"
        onSubmit={handleSubmit}
        >
        <div>
          <label className="sr-only" htmlFor="name">Name</label>
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            required
          />
          <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Email address"
              type="email"
              id="email"
              name="email"
              required
            />
              <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="message">Message</label>

          <textarea
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Message"
            rows="8"
            id="message"
            name="message"
            required
          ></textarea>
          <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            disabled={state.submitting}
            className="inline-block w-full rounded-lg bg-[#1d2b4f] px-5 py-3 font-medium text-white sm:w-auto hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring"
          >
            Send Enquiry
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</section>
      </div>
  )
}