
import Container, { ContainerProps } from "@mui/material/Container";
export default function PartialContainerUI(props: ContainerProps){
	//数学のpartial functionのアナロジー
	//これをHomeの内側に書いてしまうとタブがちらつく、NavBarが再生成される、親の再生成に伴い子のTabBarも再生成される流れ
	return <Container {...props} fixed/>
}