import { client } from '@/sanity/client';
import { PortableText } from '@portabletext/react';

// Define the TypeScript type for the full case study content
type CaseStudyDetail = {
  title: string;
  challenge: any[];
  strategy: any[];
  results: any[];
  // Add other fields you might have, like clientName, industry, etc.
};

// This component receives the 'slug' from the URL as a parameter
export default async function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  
  // GROQ query to fetch the single case study that matches the slug
  const caseStudyQuery = `*[_type == "manufacturingCaseStudy" && slug.current == $slug][0]{
    title,
    challenge,
    strategy,
    results
  }`;

  const study = await client.fetch<CaseStudyDetail>(caseStudyQuery, { slug: params.slug });

  if (!study) {
    return (
      <main className="text-center py-20">
        <h1 className="text-3xl">Case Study Not Found</h1>
        <p className="mt-4">Could not find the requested case study.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">{study.title}</h1>
        
        <div className="space-y-10">
          <section>
            <h2 className="text-3xl font-semibold border-b-2 border-primary-color pb-2 mb-4">The Challenge</h2>
            <div className="prose prose-invert max-w-none prose-lg">
              <PortableText value={study.challenge} />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold border-b-2 border-primary-color pb-2 mb-4">Our Strategy</h2>
            <div className="prose prose-invert max-w-none prose-lg">
              <PortableText value={study.strategy} />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold border-b-2 border-primary-color pb-2 mb-4">Quantifiable Results</h2>
            <div className="prose prose-invert max-w-none prose-lg">
              <PortableText value={study.results} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}