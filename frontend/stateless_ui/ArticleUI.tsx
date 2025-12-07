import type { Markdown } from "@/app/news/posts";
import React from "react";

export default function Article(props: {
  title?: string;
  markdown?: Markdown;
  children?: React.ReactNode;
}) {
  return (
    <article className="w-full">
      {/* タイトル */}
      <h1 className="text-3xl font-bold mb-6">
        {props.title ?? props.markdown?.title}
      </h1>

      {/* コンテンツ */}
      <div className="prose prose-neutral max-w-none">
        {props.children}
        {props.markdown?.content}
      </div>
    </article>
  );
}