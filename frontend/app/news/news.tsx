import posts from "@/app/news/posts";
import Article from "@/stateless_ui/ArticleUI";
import { NewsList } from "./newslist";

export default function News(){
	const postArray=posts();
	return <Article title="ニュース">
		<NewsList posts={postArray}/>
	</Article>
}