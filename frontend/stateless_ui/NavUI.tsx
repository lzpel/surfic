import * as React from 'react';
import Container from '@mui/material/Container';
import {Box, Divider} from '@mui/material';
import {BoxProps} from "@mui/system";

const NavBarPadding = (props: BoxProps) => {
	const {sx, ...props_other}=props
    return <Box
		{...props_other}
		sx={{
			...sx,
			display: "flex",
			alignItems: 'center',
		}}
	>
			{props.children}
	</Box>
}
const NavUI = (props: 
	Omit<BoxProps, "children"> 
	& {
    	children:React.ReactElement|React.ReactElement[],
    	container?: React.FunctionComponent<{ children: React.ReactNode}>
	}
) => {
    const {container, children, ...others} = props;
    const children_array=Array.isArray(children)?children:[children]
    const children_logo=children_array.filter(v=>v.key==="logo")
    const children_other=children_array.filter(v=>v.key!=="logo")
    const InheritedContainer = container || Container
    return (
        <Box
            {...others}
            sx={{
                ...others.sx,
				height:"60px"
            }}
        >
            <InheritedContainer
				sx={{
					height: "100%",
					display: "flex",
					flexDirection: 'row',
				}}
			>
				{
					children_logo &&
					<NavBarPadding>
						{children_logo}
					</NavBarPadding>
				}
				<Divider orientation="vertical" variant="middle" flexItem/>
				{
					children_other && 
					<NavBarPadding justifyContent={"flex-end"} width={"100%"}>
						{children_other}
					</NavBarPadding>
				}
            </InheritedContainer>
        </Box>
    );
}
export default NavUI;