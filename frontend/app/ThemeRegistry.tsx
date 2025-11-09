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
				root: ({ theme }) => ({
					backgroundColor: theme.palette.background.default, // 本文と同じ背景色
					boxShadow: 'none', // 影なし
					borderBottom: `1px solid ${theme.palette.divider}`, // 下線で区切る
				}),
			},
		},
	},
	typography: {
		fontSize: 14, // デフォルト文字サイズ（例: 通常は14）
		h1: { fontSize: '2rem' }, // 通常は約6rem → ここで小さくする
		h2: { fontSize: '1.8rem' },
		h3: { fontSize: '1.6rem' },
		h4: { fontSize: '1.4rem' },
		h5: { fontSize: '1.2rem' },
		h6: { fontSize: '1rem' },
	},
});

export default function ThemeRegistry(props: { children: React.ReactNode }) {
	return <ThemeProvider theme={darkTheme}>
		<CssBaseline />
		{props.children}
	</ThemeProvider>
}