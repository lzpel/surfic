import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

export type Markdown = {
	index: number;
	title: string;
	date: string; // ISO string
	description?: string;
	content: string;
};

const NEWS_DIR = path.join(fileURLToPath(import.meta.url), "..",  "posts");

export default function posts(): Markdown[] {
	const files = fs.readdirSync(NEWS_DIR).filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
	const posts: Markdown[] = files.map((fileName) => {
		const fullPath = path.join(NEWS_DIR, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);
		return {
			index: Number(fileName.replace(/[^0-9]*$/, "")),
			title: data.title ?? "",
			date: data.date ?? "",
			description:
				data.excerpt ??
				content
					.replace(/[#>*\-`]/g, "") // 簡易的にマークアップを削る
					.slice(0, 100) + "...",
			content: content,
		} as Markdown;
	});

	// 新しい日付が上に来るようにソート
	posts.sort(
		(a, b) =>
			new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	return posts;
}