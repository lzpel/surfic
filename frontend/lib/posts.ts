import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type NewsPost = {
	slug: string;
	title: string;
	date: string; // ISO string
	excerpt?: string;
};

const NEWS_DIR = path.join(process.cwd(), "content", "news");

export default function getNewsPosts(): NewsPost[] {
	const files = fs
		.readdirSync(NEWS_DIR)
		.filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));

	const posts: NewsPost[] = files.map((fileName) => {
		const fullPath = path.join(NEWS_DIR, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		const slug = fileName.replace(/\.mdx?$/, "");

		return {
			slug,
			title: data.title ?? slug,
			date: data.date ?? "",
			excerpt:
				data.excerpt ??
				content
					.replace(/[#>*\-`]/g, "") // 簡易的にマークアップを削る
					.slice(0, 100) + "...",
		};
	});

	// 新しい日付が上に来るようにソート
	posts.sort(
		(a, b) =>
			new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	return posts;
}