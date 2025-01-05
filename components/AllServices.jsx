
//-----------

"use client";

import React, { useState } from 'react';
import { FaBuilding } from "react-icons/fa6";
import { FaHardHat } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";

function AllServices() {
  // State to track the visibility of each article independently
  const [visibleIndex, setVisibleIndex] = useState(null);

  const icons = [
    <FaBuilding className="size-6" />,
    <FaHardHat className="size-6" />,
    <MdFamilyRestroom className="size-6" />,
    <FaRegHandshake className="size-6" />,
  ];

  // Define separate content for each article
  const titles = [
    "For Employees",
    "For Employers",
    "Labour Law",
    "Family Law"
    
  ];

  // Define separate bullet points for each article
  const bulletPoints = [
    ["• Severance and Contract Review", "• Human Rights", "• Wrongful Dismissal", "• Executive and Plaintiff side Litigation", "• Non-Compete/Non-Solicit"],
    ["• Contract and Policy Drafting", "• Mergers and Acquisitions", "• Terminations", "• Employer Advice", "• Regulatory Defence"],
    ["• Collective Agreement Review", "• Collective Bargaining"],
    ["• Child Support", "• Spousal Suport Divorce", "• Seperation Agreements", "• Marriage Contracts", "• Independent Legal Advice"],
    
    
  ];

  const toggleTextVisibility = (index) => {
    // If the clicked article is already visible, close it; otherwise, open it
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {icons.map((icon, index) => (
        <article
          key={index}
          className="w-[300px] mx-auto rounded-lg border border-gray-300 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
          style={{ height: visibleIndex === index ? 'auto' : '250px' }} // Fixed height unless clicked
        >
          <span className="inline-block rounded bg-[#1d2b4f] p-2 text-white">
            {icon}
          </span>

          {/* Display the unique title for each article */}
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {titles[index]}
          </h3>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleTextVisibility(index); // Toggle visibility of clicked item
            }}
            className="group mt-10 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Find out more
            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
              &rarr;
            </span>
          </a>

          {/* Render bullet points for the clicked article only */}
          {visibleIndex === index && (
            <ul className="mt-2 space-y-2" >
              {bulletPoints[index].map((point, pointIndex) => (
                <li key={pointIndex} className="text-sm text-slate-500">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

export default AllServices;
