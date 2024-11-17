import { LoadingCard, type LoadingCardProps } from "@components/LoadingCard";

export default function AuthContextLoading({ message }: Readonly<LoadingCardProps>): JSX.Element {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoadingCard message={message} />
    </div>
  );
}
