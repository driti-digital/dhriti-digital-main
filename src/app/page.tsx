import { client } from '@/sanity/client';
import DynamicHeadline from '@/components/DynamicHeadline';

// Define the types for our Sanity data
type Testimonial = {
  _id: string;
  quote: string;
  author: string;
};

type ClientLogo = {
  _id:string;
  name: string;
  // Assuming you have an image field in your Sanity schema
  // You might need to adjust this based on your actual schema
  logoUrl: string;
};

// Sanity queries
const testimonialsQuery = `*[_type == "testimonial"]{_id, quote, author}`;
const logosQuery = `*[_type == "clientLogo"]{_id, name, "logoUrl": logo.asset->url}`;

// Server component function to fetch data
async function getHomepageData() {
  const testimonials = await client.fetch<Testimonial[]>(testimonialsQuery);
  const clientLogos = await client.fetch<ClientLogo[]>(logosQuery);
  return { testimonials, clientLogos };
}

export default async function HomePage() {
  const { testimonials, clientLogos } = await getHomepageData();
  const fallbackHeadline = "Digital Growth, Made Local for Businesses in the Kolar-Hoskote Region.";

  return (
    <main>
      <div className="text-center py-20 bg-gray-50">
        {/* Use the Dynamic Headline component here */}
        <DynamicHeadline fallbackHeadline={fallbackHeadline} />
        <p className="text-lg text-gray-600 mt-4">Your sub-headline from Sanity can go here.</p>
      </div>

      {/* Testimonials Section */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {testimonials.map(testimonial => (
            <div key={testimonial._id} className="border p-6 rounded-lg shadow">
              <p className="italic">"{testimonial.quote}"</p>
              <p className="text-right font-semibold mt-4">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Client Logos Section */}
      <div className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Trusted By</h2>
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-8">
          {clientLogos.map(logo => (
            <img key={logo._id} src={logo.logoUrl} alt={logo.name} className="h-12" />
          ))}
        </div>
      </div>
    </main>
  );
}