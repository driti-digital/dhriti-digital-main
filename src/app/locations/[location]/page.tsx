import React from 'react';

// Define the props type, which includes params for the dynamic route
type LocationPageProps = {
  params: {
    location: string;
  };
};

// The page component
const LocationPage = ({ params }: LocationPageProps) => {
  return (
    <div>
      <h1>Location Details</h1>
      <p>Showing details for location: {params.location}</p>
      {/* You can fetch and display data for the specific location here */}
    </div>
  );
};

// Export the component as the default export to make it a module
export default LocationPage;