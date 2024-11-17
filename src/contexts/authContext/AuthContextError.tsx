import { ErrorCard, type ErrorCardProps } from "@components/ErrorCard";

export default function AuthContextError({ message }: Readonly<ErrorCardProps>): JSX.Element {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ErrorCard message={message} />
    </div>
  );
}
