// This is a temporary, simplified version for debugging the build error.

type Props = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: Props) {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">Post Slug:</h1>
        <p className="text-2xl mt-4 bg-gray-100 p-4 rounded">
          {params.slug}
        </p>
      </div>
    </main>
  );
}