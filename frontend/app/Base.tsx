import IconTextUI from '@/stateless_ui/IconTextUI';
import NavUI from '@/stateless_ui/NavUI';
import PartialContainerUI from '@/stateless_ui/PartialContainerUI';
import { Stack } from '@mui/material';
import Image from "next/image";
import CampaignIcon from '@mui/icons-material/Campaign';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
export default function Base(props: {
	children?:React.ReactNode
}) {
	return <>
		<NavUI container={PartialContainerUI}>
			<IconTextUI
				key="logo"
				icon={
					<Image src={"/logo.svg"} alt='mimamori logo' height={50} width={100}/>
				}
			/>
			<Stack direction="row">
				<IconTextUI key={"news"} icon={<CampaignIcon/>}>
					ニュース
				</IconTextUI>
				<IconTextUI key={"product"} icon={<CategoryIcon/>}>
					製品・サービス
				</IconTextUI>
				<IconTextUI key={"about"} icon={<InfoIcon/>}>
					会社情報
				</IconTextUI>
			</Stack>
		</NavUI>
		<PartialContainerUI>
			{props.children}
		</PartialContainerUI>
	</>
}
