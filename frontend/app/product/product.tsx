import Article, { ArticleInheritedProps } from "@/stateless_ui/Article";

export default function Product(props: ArticleInheritedProps){
	return <Article title="製品・サービス" link="/product" {...props}>
		comming soon...
	</Article>
}