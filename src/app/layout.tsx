import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import Header from "@components/Header";
import AuthProviderClientWrapper from "@src/contexts/authContext/AuthProviderClientWrapper";

// -----------------------------------------------------------------------------
export const metadata: Metadata = {
	title: "NextJS Fireabase Admin",
	description:
		"Template repo demo-ing Firebase client and admin auth ntegration with NextJS 14+.",
};

// -----------------------------------------------------------------------------
interface RootLayoutProps {
	children: ReactNode;
}

// -----------------------------------------------------------------------------
export default function RootLayout({
	children,
}: Readonly<RootLayoutProps>): JSX.Element {
	return (
		<html lang="en">
			<body>
				<AuthProviderClientWrapper>
					<Header />
					<main>{children}</main>
				</AuthProviderClientWrapper>
			</body>
		</html>
	);
}
