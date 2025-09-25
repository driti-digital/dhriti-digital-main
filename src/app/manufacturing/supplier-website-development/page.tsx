import { client } from '@/sanity/client';
import { PortableText } from '@portabletext/react';

// Define the TypeScript type for the service content
type ManufacturingService = {
  title: string;
  subHeadline: string;
  content: any[]; // This is the rich text (Portable Text) field
};

// GROQ query to fetch the service with the slug "supplier-website-development"
// Make sure you have a document in Sanity with this slug.
const serviceQuery = `*[_type == "manufacturingService" && slug.current == "supplier-website-development"][0]{
  title,
  subHeadline,
  content
}`;

// Server component function to fetch the data
async function getServiceData() {
  const data = await client.fetch<ManufacturingService>(serviceQuery);
  return data;
}

export default async function SupplierWebsiteDevelopmentPage() {
  const service = await getServiceData();

  if (!service) {
    return (
      <main className="text-center py-20">
        <h1 className="text-3xl">Service Content Not Found</h1>
        <p className="mt-4">Please ensure the content is published in the CMS with the correct slug.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{service.title}</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10">{service.subHeadline}</p>
        
        {/* Render the rich text content */}
        <div className="prose prose-invert max-w-none prose-lg">
          <PortableText value={service.content} />
        </div>
      </div>
    </main>
  );
}