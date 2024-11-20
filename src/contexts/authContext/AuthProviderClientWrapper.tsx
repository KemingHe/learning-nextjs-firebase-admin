// Required for client-side rendering of the AuthProvider.

"use client";

import type { ReactNode } from "react";

import ErrorCard from "@components/ErrorCard";
import LoadingCard from "@components/LoadingCard";
import { AuthProvider } from "@contexts/authContext/AuthContext";

export default function AuthProviderClientWrapper({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <AuthProvider LoadingComponent={LoadingCard} ErrorComponent={ErrorCard}>
      {children}
    </AuthProvider>
  );
}
