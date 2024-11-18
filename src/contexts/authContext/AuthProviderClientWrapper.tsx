// Required for client-side rendering of the AuthProvider.

"use client";

import type { ReactNode } from "react";

import { ErrorCard } from "@components/ErrorCard";
import { LoadingCard } from "@components/LoadingCard";
import { AuthProvider } from "@contexts/authContext/AuthContext";

interface AuthProviderClientWrapperProps {
	children: ReactNode;
}

export default function AuthProviderClientWrapper({
	children,
}: Readonly<AuthProviderClientWrapperProps>): JSX.Element {
	return (
		<AuthProvider LoadingComponent={LoadingCard} ErrorComponent={ErrorCard}>
			{children}
		</AuthProvider>
	);
}
