import { client } from '@/sanity/client';
import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

type Props = {
  params: { slug: string };
};

type SinglePost = {
  _id: string;
  title: string;
  publishedAt: string;
  body: PortableTextBlock[];
};

export async function generateStaticParams() {
  const posts = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "post"]{"slug": slug.current}`
  );
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

async function getPost(slug: string): Promise<SinglePost | null> {
  const post = await client.fetch<SinglePost>(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      publishedAt,
      body
    }`,
    { slug }
  );
  return post;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post || !post.body) {
    return <div>Post not found or has no content.</div>;
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-8">
          Published on {formatDate(post.publishedAt)}
        </p>
        <div className="prose lg:prose-xl">
          <PortableText value={post.body} />
        </div>
      </div>
    </article>
  );
}