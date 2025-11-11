import * as React from "react";
import { Metadata } from "next";
import Article from "@/stateless_ui/Article";
import posts, { Markdown } from "../posts";

type Params = { index: string };
type PageProps = { params: Promise<Params> };

const postArray=posts()
const postMap=Object.fromEntries(postArray.map(v => [String(v.index), v]));
export default async function Post(props: PageProps) {
	const params = await props.params;
	return <Article markdown={postMap[params.index]} />;
};

export async function generateMetadata(props: PageProps): Promise<Metadata> {
	const params = await props.params;
	const post = postMap[params.index]
	return {
		title: post.title,
		description: post.description
	} as Metadata;
}
export async function generateStaticParams() {
	return postArray.map(v=>{
		return {
			index: String(v.index)
		} as Params
	})
}