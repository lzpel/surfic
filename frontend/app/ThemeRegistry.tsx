"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { deepPurple, purple } from '@mui/material/colors';
// https://mui.com/material-ui/customization/palette/

const darkTheme = createTheme({
	palette: {
		primary: deepPurple,
		secondary: purple,
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					borderRadius: "999px", // ✅ AppBarだけ個別に指定も可
					margin: "16px",
				},
			},
		},
	},
});

export default function ThemeRegistry(props: { children: React.ReactNode }) {
	return <ThemeProvider theme={darkTheme}>
		<CssBaseline />
		{props.children}
	</ThemeProvider>
}