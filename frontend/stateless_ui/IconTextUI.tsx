import {Stack, Typography, TypographyProps} from "@mui/material"
import * as React from "react";

type DisplayType = TypographyProps["display"]
const IconTextUI = (props: {
	children?: React.ReactNode,
	icon: React.ReactNode
	display?: DisplayType
}) => {
	const display: DisplayType = props.display ?? {xs: "none", sm: "block"}
	return <Stack direction={"row"} sx={{width: {xs: undefined, sm: "100%"}}}>
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