import type { ComponentType, ReactNode } from "react";

import type { ErrorProps } from "@src/components/ErrorCard";
import type { LoadingProps } from "@src/components/LoadingCard";

// biome-ignore format: added alignment for clarity.
export interface ProviderProps {
  LoadingComponent: ComponentType<LoadingProps>;
  ErrorComponent  : ComponentType<ErrorProps>;
  children        : ReactNode;
}
