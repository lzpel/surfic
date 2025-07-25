import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

const items: string[]=["News", "Product", "Service"]
export default function Tool(props:{
	children?: React.ReactNode
}){
	return <Container maxWidth="xl">
		<AppBar position="static" color="default">
			<Toolbar>
				{props.children}
				<Box display={"flex"} flexDirection={"row"} flexGrow={1}>
					<Box flexGrow={1}/>
					{items.map(v=>(
						<Button key={v} color="primary">
							{v}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
    </Container>
}