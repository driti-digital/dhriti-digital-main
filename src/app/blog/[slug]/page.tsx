import { client } from '@/sanity/client';
import { PortableText } from '@portabletext/react';
import { Post } from '../page'; // Re-use the Post type from the blog list page

// Define the type for the component's props
type Props = {
  params: { slug: string };
};

// This function tells Next.js which blog post pages to build ahead of time
export async function generateStaticParams() {
  const posts = await client.fetch<Post[]>(`*[_type == "post"]{"slug": slug.current}`);
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

// This function fetches the data for a single post
async function getPost(slug: string) {
  const post = await client.fetch<Post>(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      publishedAt,
      body
    }`,
    { slug }
  );
  return post;
}

// Helper function to format the date
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// The page component now uses the explicit Props type
export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-8">
          Published on {formatDate(post.publishedAt)}
        </p>
        
        <div className="prose lg:prose-xl">
          {post.body && <PortableText value={post.body} />}
        </div>
      </div>
    </article>
  );
}