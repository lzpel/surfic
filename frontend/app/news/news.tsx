import getNewsPosts, { NewsPost } from "@/lib/posts";
import Article, { ArticleInheritedProps } from "@/stateless_ui/Article";
import { NewsList } from "./newslist";

export default function News(props: ArticleInheritedProps){
	const posts=getNewsPosts();
	return <Article title="ニュース" link="/news" {...props}>
		<NewsList posts={posts}/>
	</Article>
}