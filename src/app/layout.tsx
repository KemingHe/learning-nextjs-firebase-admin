import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "NextJS Fireabase Admin",
	description:
		"Template repo demo-ing Firebase client and admin auth ntegration with NextJS 14+.",
	icons: {
		icon: "icons/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
