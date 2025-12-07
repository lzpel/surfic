// components/NewsList.tsx
import type { Markdown } from "@/app/news/posts";

type Props = {
  posts: Markdown[];
};

export function NewsList({ posts }: Props) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <a
          key={post.index}
          href={`/news/${post.index}`}
          className="block rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">
              {post.date} {post.title}
            </h3>

            <p className="text-sm text-gray-600">{post.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}