"use client";

import type { AuthError, User } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { type Context, createContext, useContext, useMemo } from "react";
import { useAuthState } from "react-firehooks/auth";

import { fbAuth } from "@lib/firebaseClientApp";

import type { ProviderProps } from "@contexts/ProviderProps";

// -----------------------------------------------------------------------------
// biome-ignore format: added alignment for clarity.
export interface AuthContextProps {
  // NextJS client router and current pathname.
  clientRouter      : ReturnType<typeof useRouter>;
  pathname          : string;

  // Firebase Auth state.
  user              : User | undefined;
  authContextLoading: boolean;
  authContextError  : AuthError | undefined;
}

// -----------------------------------------------------------------------------
const AuthContext: Context<AuthContextProps | undefined> = createContext<
	AuthContextProps | undefined
>(undefined);

// -----------------------------------------------------------------------------
export function AuthProvider({
	LoadingComponent,
	ErrorComponent,
	children,
}: ProviderProps): JSX.Element {
	const clientRouter = useRouter();
	const pathname = usePathname();

	const [user, loadingUser, errorUser] = useAuthState(fbAuth);
	const authContextValue = useMemo(
		() =>
			(
      // biome-ignore format: added alignment for clarity.
      {
        clientRouter,
        pathname,
        user              : user?.uid ? user: undefined,
        authContextLoading: loadingUser,
        authContextError  : errorUser
    }),
		[clientRouter, pathname, user, loadingUser, errorUser],
	);

	if (loadingUser) return <LoadingComponent message={"Loading..."} />;
	if (errorUser) return <ErrorComponent message={"Error Loading User Info."} />;
	return (
		<AuthContext.Provider value={authContextValue}>
			{children}
		</AuthContext.Provider>
	);
}

// -----------------------------------------------------------------------------
export function useAuthContext(): AuthContextProps {
	const context: AuthContextProps | undefined = useContext(AuthContext);
	if (!context) {
		throw new Error(
			'useAuthContext returns "undefined". Make sure the calling component is a children of <AuthProvider>.',
		);
	}
	return context;
}
