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
	title: "Surfic合同会社",
	description: "Surfic portal site",
};

export default function RootLayout(
	props: Readonly<{children: React.ReactNode;}>
) {
	return <html lang="jp">
		<body className={`${geistSans.variable} ${geistMono.variable}`}>
			<ThemeRegistry>
				<Base>
					{props.children}
				</Base>
			</ThemeRegistry>
		</body>
	</html>
}
