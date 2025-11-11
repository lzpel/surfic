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
			CEO / 代表社員 三角 聡
		</Row>
		<Row>
			設立 2025年11月
		</Row>
		<Row>
			資本金 50万円
		</Row>
		<Box
			sx={{
				borderLeft: "4px solid",
				borderColor: "primary.main",
				pl: 2.5,
				ml: 1,
				mt: 5,
			}}
		>
			<img src="/IMG_20240219_183518_copy.jpg" alt="profile" height="200px"/>	
			<Typography variant="h3">
				CEO / 代表社員 三角聡
			</Typography>
			<Typography>
				2024年京都大学工学研究科社会基盤工学専攻修了。新卒でソニーグループ株式会社に入社し、AIシステム開発および新規事業開拓に従事。
				2025年11月サーフィック合同会社設立
			</Typography>
		</Box>
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