import TechUI from "@/stateless_ui/TechUI";
import { Typography } from "@mui/material";

export default function Home() {
	return <>
		<TechUI/>
		<Typography variant="h1" gutterBottom mt={10} color="success">
			"Technology that lightens the world."
		</Typography>
		サーフィック合同会社は、人間の労働力だけでは支えきれないほど複雑で重い社会を、
		ソフトウェア開発を通じて軽くし、世界の進化を加速させていきます。
	</>
}
