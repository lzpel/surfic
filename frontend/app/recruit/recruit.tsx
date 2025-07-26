import Article, { ArticleInheritedProps } from "@/app/Article";
import { Typography } from "@mui/material";

export default function Recruit(props: ArticleInheritedProps){
	return <Article title="採用情報" link="/recruit" {...props}>
		<Typography variant="body1" gutterBottom>現在募集中のポジションはございません</Typography>
	</Article>
}