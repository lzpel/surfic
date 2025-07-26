import Article, { ArticleInheritedProps } from "@/app/Article";

export default function News(props: ArticleInheritedProps){
	return <Article title="ニュース" link="/news" {...props}>
	</Article>
}