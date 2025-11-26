import ArticleUI from "@/stateless_ui/ArticleUI";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";

export default function About(){
	return <ArticleUI title="会社情報">
		<Row>
			社名 サーフィック合同会社 / Surfic LLC
		</Row>
		<Row>
			所在 神奈川県横浜市鶴見区４－４５－５
		</Row>
		<Row>
			設立 2025年11月
		</Row>
		<Row>
			資本金 50万円
		</Row>
	</ArticleUI>
}
function Row(props: {children?: React.ReactNode}){
	return <>
		<Typography variant="body1" gutterBottom>
			{props.children}
		</Typography>
		<Divider variant="middle" sx={{my: 1}} />
	</>
}