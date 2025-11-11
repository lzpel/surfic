import IconTextUI from '@/stateless_ui/IconTextUI';
import NavUI from '@/stateless_ui/NavUI';
import PartialContainerUI from '@/stateless_ui/PartialContainerUI';
import { Stack } from '@mui/material';
import Image from "next/image";
import CampaignIcon from '@mui/icons-material/Campaign';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import BreadUI from '@/stateless_ui/BreadUI';
export default function Base(props: {
	children?:React.ReactNode
}) {
	return <>
		<NavUI container={PartialContainerUI}>
			<IconTextUI
				key="logo"
				href="/"
				icon={
					<Image src={"/logo.svg"} alt='mimamori logo' width={186} height={126} style={{ height: "50px", width: "auto" }}/>
				}
			/>
			<Stack direction="row">
				<IconTextUI key={"news"} href="/news" icon={<CampaignIcon/>}>
					ニュース
				</IconTextUI>
				<IconTextUI key={"product"} href="/product" icon={<CategoryIcon/>}>
					製品・サービス
				</IconTextUI>
				<IconTextUI key={"about"} href="/about" icon={<InfoIcon/>}>
					会社情報
				</IconTextUI>
			</Stack>
		</NavUI>
		<PartialContainerUI>
			<BreadUI/>
			{props.children}
		</PartialContainerUI>
	</>
}
