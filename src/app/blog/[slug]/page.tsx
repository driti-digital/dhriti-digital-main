type PageProps = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: PageProps) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>Displaying post with slug: {params.slug}</p>
    </main>
  );
}