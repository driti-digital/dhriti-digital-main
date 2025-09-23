"use client"; // This is crucial - it marks this as a Client Component

import { useState } from 'react';

// Assuming this is the type definition for a case study
export type CaseStudy = {
  _id: string;
  clientName: string;
  industry: string;
  location: string;
  challenge: string;
};

type PortfolioGridProps = {
  caseStudies: CaseStudy[];
};

export default function PortfolioGrid({ caseStudies }: PortfolioGridProps) {
  // State to keep track of the active filters
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  // Get unique industries and locations for filter buttons
  const industries = [...new Set(caseStudies.map(cs => cs.industry))];
  const locations = [...new Set(caseStudies.map(cs => cs.location))];

  // Filter the case studies based on the active filters
  const filteredStudies = caseStudies.filter(study => {
    const industryMatch = activeIndustry ? study.industry === activeIndustry : true;
    const locationMatch = activeLocation ? study.location === activeLocation : true;
    return industryMatch && locationMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filter UI */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div>
          <span className="font-bold mr-2">Industry:</span>
          <button onClick={() => setActiveIndustry(null)} className={`px-3 py-1 rounded-full ${!activeIndustry ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>All</button>
          {industries.map(industry => (
            <button key={industry} onClick={() => setActiveIndustry(industry)} className={`px-3 py-1 rounded-full ml-2 ${activeIndustry === industry ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {industry}
            </button>
          ))}
        </div>
        <div>
          <span className="font-bold mr-2">Location:</span>
          <button onClick={() => setActiveLocation(null)} className={`px-3 py-1 rounded-full ${!activeLocation ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>All</button>
          {locations.map(location => (
            <button key={location} onClick={() => setActiveLocation(location)} className={`px-3 py-1 rounded-full ml-2 ${activeLocation === location ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {location}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStudies.map(study => (
          <div key={study._id} className="border rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">{study.clientName}</h3>
            <p className="text-sm text-gray-500 mb-2">
              <span className="font-semibold">Industry:</span> {study.industry} | <span className="font-semibold">Location:</span> {study.location}
            </p>
            <p className="text-gray-700">{study.challenge}</p>
          </div>
        ))}
      </div>
    </div>
  );
}