import {Stack, Typography, TypographyProps} from "@mui/material"
import * as React from "react";

type DisplayType = TypographyProps["display"]
const IconTextUI = (props: {
	icon: React.ReactNode
	display?: DisplayType
	href?: string//リンク化
	children?: React.ReactNode
}) => {
	const display: DisplayType = props.display ?? {xs: "none", sm: "block"}
	const props_href=props.href && {
		component:"a",
		href:props.href
	}
	return <Stack 
		direction={"row"}
		{...props_href}
		sx={{
			color: "inherit",
			textDecoration: 'none'
		}}
	>
		{props.icon}
		<Typography
			sx={{
				textAlign: "center",
				display: display,
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis"
			}}
		>
			{props.children}
		</Typography>
	</Stack>
}
export default IconTextUI