import TechUI from "@/stateless_ui/TechUI";
import { Typography } from "@mui/material";

export default function Home() {
	const a=<>
		人類は古代から「知性とは何か」を探求してきました。
		アリストテレスがその本質を論じ、神話の中では鍛冶神ヘパイストスが
		自律人形タロースを作り出したと語られています。

		いま私たちは、想像の産物だった人工知能を現実のものとしつつあります。
		サーフィック合同会社は、知性を形づくる技術を磨き、
		人と機械の未来を切り拓いていきます。
	</>
	return <>
		<TechUI/>
		<Typography variant="h1" gutterBottom mt={10} color="success">
			現在プロダクトを鋭意開発中です！公開をお楽しみに！
		</Typography>
		LLMから操作できる3DCADを開発しています
	</>
}
