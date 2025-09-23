"use client"; // This component runs on the client

import { useState, useEffect } from 'react';

type DynamicHeadlineProps = {
  fallbackHeadline: string;
};

export default function DynamicHeadline({ fallbackHeadline }: DynamicHeadlineProps) {
  // State to hold the headline, initialized with the static fallback
  const [headline, setHeadline] = useState(fallbackHeadline);

  useEffect(() => {
    // This function will run once when the component mounts on the client
    const fetchLocation = async () => {
      try {
        // Fetch location data from the IP API
        const response = await fetch('http://ip-api.com/json/?fields=city');
        if (!response.ok) {
          throw new Error('Failed to fetch location');
        }
        const data = await response.json();

        // If a city is returned, update the headline
        if (data.city) {
          setHeadline(`Digital Growth, Made Local for Businesses in ${data.city}.`);
        }
      } catch (error) {
        console.error("Could not fetch location:", error);
        // If there's an error, the headline remains the static fallback
      }
    };

    fetchLocation();
  }, []); // The empty dependency array ensures this runs only once

  return <h1 className="text-4xl md:text-5xl font-bold">{headline}</h1>;
}