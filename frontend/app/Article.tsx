import { Button, Typography } from "@mui/material";
import React from "react";
export type ArticleInheritedProps={
	display?: "title"|"button"
}
export default function Article(props: ArticleInheritedProps&{
	title: React.ReactNode
	link:string
	children?: React.ReactNode
}){
	if(props.display==="title")return props.title;
	if(props.display==="button")return <Button color="primary" href={props.link}>
		{props.title}
	</Button>;
	return <>
		<Typography variant="h1" gutterBottom>
			{props.title}
		</Typography>
			{props.children}
	</>
}