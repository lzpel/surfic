import { Markdown } from "@/app/news/posts";
import { Typography } from "@mui/material";
import React from "react";
export default function Article(props: {
	title?: string
	markdown?: Markdown, 
	children?: React.ReactNode
}){
	return <>
		<Typography variant="h1" gutterBottom>
			{props.title}{props.markdown?.title}
		</Typography>
		{props.children}{props.markdown?.content}
	</>
}