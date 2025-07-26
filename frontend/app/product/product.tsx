import Article, { ArticleInheritedProps } from "@/app/Article";

export default function Product(props: ArticleInheritedProps){
	return <Article title="製品・サービス" link="/product" {...props}>
	</Article>
}