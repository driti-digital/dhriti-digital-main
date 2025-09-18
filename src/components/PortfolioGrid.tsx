'use client';

import { useState, useMemo } from 'react';

// Define a type for our case study data for type safety
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
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [activeLocation, setActiveLocation] = useState('All');

  // Memoize unique industries and locations to avoid recalculating on every render
  const industries = useMemo(() => ['All', ...new Set(caseStudies.map(cs => cs.industry))], [caseStudies]);
  const locations = useMemo(() => ['All', ...new Set(caseStudies.map(cs => cs.location))], [caseStudies]);

  const filteredStudies = useMemo(() => {
    return caseStudies.filter(study => {
      const industryMatch = activeIndustry === 'All' || study.industry === activeIndustry;
      const locationMatch = activeLocation === 'All' || study.location === activeLocation;
      return industryMatch && locationMatch;
    });
  }, [caseStudies, activeIndustry, activeLocation]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-4 mb-8">
        {/* Industry Filters */}
        <div>
          <h3 className="font-bold mb-2">Filter by Industry:</h3>
          <div className="flex flex-wrap gap-2">
            {industries.map(industry => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${activeIndustry === industry ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
        {/* Location Filters */}
        <div>
          <h3 className="font-bold mb-2">Filter by Location:</h3>
          <div className="flex flex-wrap gap-2">
            {locations.map(location => (
              <button
                key={location}
                onClick={() => setActiveLocation(location)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${activeLocation === location ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStudies.length > 0 ? (
          filteredStudies.map(study => (
            <div key={study._id} className="border rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold mb-2">{study.clientName}</h4>
              <p className="text-gray-600 mb-4"><span className="font-semibold">Industry:</span> {study.industry} | <span className="font-semibold">Location:</span> {study.location}</p>
              <p><span className="font-semibold">Challenge:</span> {study.challenge}</p>
            </div>
          ))
        ) : (
          <p>No case studies match the selected filters.</p>
        )}
      </div>
    </div>
  );
}