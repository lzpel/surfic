import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import Base from "@/app/Base";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "サーフィック合同会社",
	description: "Surfic LLC",
};

export default function RootLayout(
	props: Readonly<{children: React.ReactNode;}>
) {
	const content=<Base>{props.children}</Base>
	//const content=<Sandbox/>
	
	return <html lang="jp">
		<body className={`${geistSans.variable} ${geistMono.variable}`}>
			<ThemeRegistry>
				{content}
			</ThemeRegistry>
		</body>
	</html>
}