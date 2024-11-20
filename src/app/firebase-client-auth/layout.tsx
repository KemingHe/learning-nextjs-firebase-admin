import type { ReactNode } from "react";

import AuthProviderClientWrapper from "@contexts/authContext/AuthProviderClientWrapper";

export default function FirebaseClientAuthLayout({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <AuthProviderClientWrapper>{children}</AuthProviderClientWrapper>;
}
