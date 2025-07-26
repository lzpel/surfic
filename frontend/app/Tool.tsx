import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from "@mui/material/Box"
import Product from "@/app/product/product"
import Contact from "@/app/contact/contact"
import News from "@/app/news/news"
import Recruit from "@/app/recruit/recruit"

export default function Tool(props:{
	children?: React.ReactNode
}){
	// https://storyhub.jp/news を参考にするといか4項目ぐらいあればいいかな
	// News AboutUs product/service recruit 
	return <AppBar position="static" color="default">
		<Container maxWidth="xl">
			<Toolbar>
				{props.children}
				<Box display={"flex"} flexDirection={"row"} flexGrow={1}>
					<Box flexGrow={1}/>
					<News display="button"/>
					<Product display="button"/>
					<Recruit display="button"/>
					<Contact display="button"/>
				</Box>
			</Toolbar>
		</Container>
	</AppBar>
}