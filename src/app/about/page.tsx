import { client } from '@/sanity/client';
import Image from 'next/image';

// Define the TypeScript types for our Sanity data
type TeamMember = {
  _id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

type CoreValue = {
  _key: string;
  title: string;
  description: string;
};

type AboutPageContent = {
  title: string;
  description: string;
  values: CoreValue[];
};

// Sanity GROQ queries
// Fetches the single document of type 'aboutPage'
const aboutContentQuery = `*[_type == "aboutPage"][0]{
  title,
  description,
  values[]{_key, title, description}
}`;

// Fetches all documents of type 'teamMember'
const teamMembersQuery = `*[_type == "teamMember"]{
  _id,
  name,
  role,
  bio,
  "imageUrl": image.asset->url
}`;

// Server component function to fetch all data for the page
async function getAboutData() {
  const content = await client.fetch<AboutPageContent>(aboutContentQuery);
  const teamMembers = await client.fetch<TeamMember[]>(teamMembersQuery);
  return { content, teamMembers };
}

export default async function AboutPage() {
  const { content, teamMembers } = await getAboutData();

  return (
    <main>
      {/* Hero Section */}
      <div className="text-center py-12 bg-gray-50">
        <h1 className="text-4xl font-bold">{content?.title || 'About Us'}</h1>
        <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">{content?.description || 'Learn more about our mission and the team behind our success.'}</p>
      </div>

      {/* Our Values Section */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {content?.values?.map(value => (
            <div key={value._key} className="text-center">
              <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {teamMembers.map(member => (
            <div key={member._id} className="text-center bg-white p-6 rounded-lg shadow-lg">
              {member.imageUrl && (
                <Image
                  src={member.imageUrl}
                  alt={`Photo of ${member.name}`}
                  width={128}
                  height={128}
                  className="rounded-full mx-auto mb-4"
                />
              )}
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}