// import Image from "next/image";
// import BgLogoImage from '../../assets/images/King Law Logo A7.png'

export default function Page() {
    return (
        <div>
        {/* <h1>Welcome to the contact page!</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam modi, facere eos consequatur illo mollitia vel libero molestias commodi numquam est, debitis porro sunt quo officia, adipisci laudantium tempora unde.</p> */}
        <section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
      
      
          {/* <Image
            src={BgLogoImage}
            alt="Logo"
            layout="intrinsic"
            width={150}
            height={150}
          /> */}
        

        <h3 className="text-2xl font-bold my-2 uppercase text-gray-800">Send Us a Message</h3>
        <p className="max-w-xl text-lg text-slate-700">
        Need legal assistance? Our experienced team is here to help you navigate your legal issues with confidence. Reach out now to discuss your case.
        </p>

        <div className="mt-8">
          <a href="tel:+14379009259" className="text-2xl font-bold text-[#1d2b4f]"> (437) 900-9259 </a>

          {/* <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address> */}
          <div className="space-y-2 mt-2">
          {/* <h4 className="text-lg font-semibold">Address</h4> */}
          <address className="not-italic text-slate-700">
            50 Richmond St. East,
            <br />
            Suit 119,
            <br />
            Mailbox #2053, 
            <br />
            The Firms,
            <br />
            Oshawa, ON L1G 7C7
          </address>
        </div>

        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
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
              />
            </div>

            {/* <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div> */}
          </div>

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-[#1d2b4f] px-5 py-3 font-medium text-white sm:w-auto"
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