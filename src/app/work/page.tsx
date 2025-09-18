import { client } from '@/sanity/client';
import PortfolioGrid, { CaseStudy } from '@/components/PortfolioGrid';

// This query fetches all documents of type 'caseStudy'
const caseStudiesQuery = `*[_type == "caseStudy"]{
  _id,
  clientName,
  industry,
  location,
  challenge
}`;

async function getCaseStudies() {
  // The <CaseStudy[]> is a TypeScript generic to tell the client what shape the data will be
  const studies = await client.fetch<CaseStudy[]>(caseStudiesQuery);
  return studies;
}

export default async function WorkPage() {
  const caseStudies = await getCaseStudies();

  return (
    <main>
      <div className="text-center py-12 bg-gray-50">
        <h1 className="text-4xl font-bold">Our Work</h1>
        <p className="text-lg text-gray-600 mt-2">Explore our successful client partnerships.</p>
      </div>
      <PortfolioGrid caseStudies={caseStudies} />
    </main>
  );
}