"use client";

import type { ReactNode } from "react";

import AuthContextError from "@contexts/authContext/AuthContextError";
import AuthContextLoading from "@contexts/authContext/AuthContextLoading";
import { AuthProvider } from "@contexts/authContext/AuthContext";

interface AuthProviderClientWrapperProps {
	children: ReactNode;
}

export default function AuthProviderClientWrapper({
	children,
}: Readonly<AuthProviderClientWrapperProps>): JSX.Element {
	return (
		<AuthProvider 
      LoadingComponent={AuthContextLoading} 
      ErrorComponent={AuthContextError}
    >
			{children}
		</AuthProvider>
	);
}
