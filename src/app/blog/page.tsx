import Link from 'next/link';
import { client } from '@/sanity/client';

// Define a type for our post data
export type Post = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
};

// Query to fetch all posts, ordered by publication date
const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt
}`;

async function getPosts() {
  const posts = await client.fetch<Post[]>(postsQuery);
  return posts;
}

// Helper function to format the date
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogListPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center py-12 bg-gray-50 mb-8">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="text-lg text-gray-600 mt-2">Insights on Digital Marketing for Manufacturers</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post._id} className="border-b pb-4">
              <Link href={`/blog/${post.slug.current}`}>
                <h2 className="text-2xl font-semibold text-blue-700 hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm mt-1">
                {formatDate(post.publishedAt)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}