// components/NewsList.tsx
import Link from "next/link";
import type { NewsPost } from "@/lib/posts";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
  posts: NewsPost[];
};

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "medium",
  }).format(new Date(dateStr));
}

export function NewsList({ posts }: Props) {
	const a=<CardMedia component="img" height="140" />
	return posts.map((post) => (
		<Card key={post.slug}  component={"a"} href={`/news/${post.slug}`}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{post.date} {post.title}
					</Typography>
					<Typography variant="body2" sx={{ color: 'text.secondary' }}>
						{post.excerpt}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	))
}