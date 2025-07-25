import Tool from "@/app/Tool";
import Container from '@mui/material/Container';
export default function Base(props: {
	children?:React.ReactNode
}) {
	return <>
		<Tool>
			<img src={`${process.env.NEXT_PUBLIC_PREFIX}/logo.svg`} alt="Logo" style={{ height: "32px" }} />
		</Tool>
		<Container>
			{props.children}
		</Container>
	</>
}
