import Link from 'next/link'
import React from 'react'

function Faq() {
  return (
    
        <div className="space-y-4 my-8">
  <details
    className="group border-s-4 border-[#1d2b4f] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-2">
      <h2 className="text-lg font-medium text-gray-900">
        How long does it take to negotiate a severance package?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
        The duration to negotiate your package is contingent on the employer and complexity of your case.
        Each case is different. Typically a straight forward case will take 1-3
        months to settle. After 3 months of negotiating you should consider bringing litigation.
    </p>
  </details>

  <details
    className="group border-s-4 border-[#1d2b4f] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-2">
      <h2 className="text-lg font-medium text-gray-900">
        Do you accept contingency fee retainers?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    In limited circumstances, we will take a case on contingency, where our fee will be 30% plus HST on the increase
    of your severance package, or on the entire settlement or award received in a tribunal or court.
    </p>
  </details>
  <details
    className="group border-s-4 border-[#1d2b4f] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-2">
      <h2 className="text-lg font-medium text-gray-900">
       Do you handle family law matters funded by legal aid?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    We handle a limited number of family law matters on private retainers. However, in certain situations,
    we may accept family law matters funded by Legal Aid Ontario.
    </p>
  </details>

  <details
    className="group border-s-4 border-[#1d2b4f] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-2">
      <h2 className="text-lg font-medium text-gray-900">
        How Can You Help If I’m Being Disciplined or Investigated?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    We have supported directors, employees, and regulated professionals during workplace and regulatory investigations.
    Our team can guide you through the investigation process and represent you in disciplinary hearings by your regulatory
    body. We have experience representing professionals regulated by the College of Early Childhood Educators and the Real Estate Council of Ontario (RECO).
    </p>
  </details>
  <details
    className="group border-s-4 border-[#1d2b4f] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-2">
      <h2 className="text-lg font-medium text-gray-900">
        What Support Can You Offer When Criminal Offenses Affect My Job?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
    With experience as a former federal prosecutor, Steven has handled numerous trials involving drug trafficking
    and charter litigation. We are equipped to guide you through criminal legal procedure. If you face criminal
    charges affecting your job, reach out to us, and we will assist you with the legal implications in both criminal
    and employment law.
    </p>
  </details>
  <br />
  <div className=''>
    <Link  href="/INFOFORCLIENTSSKINGLAW.pdf" passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer" className="text-slate-700 underline">
        INFORMATION FOR CLIENTS OF KING LAW
        </a>
    </Link>
  </div>
</div>

    
  )
}

export default Faq