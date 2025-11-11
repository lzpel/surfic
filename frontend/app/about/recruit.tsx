import Article from "@/stateless_ui/Article";
import { Typography } from "@mui/material";

export default function Recruit(){
	return <Article title="会社情報">
		<Typography variant="body1" gutterBottom>
			サーフィック合同会社
			<br/>
			英文社名 Surfic LLC
			<br/>
			所在：神奈川県横浜市鶴見区４－４５－５
			<br/>
			TEL: 070-3780-7659  Email: info@surfic.com
			<br/>
			設立 2025年11月
			<br/>
			資本金 50万円
			代表 三角 聡
		</Typography>
	</Article>
}