import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export interface ErrorCardProps {
	message: string;
}

export function ErrorCard({ message }: Readonly<ErrorCardProps>): JSX.Element {
	return (
		<div className="card shadow-lg">
      <div className="card-body flex flex-col justify-center items-center">
        <ExclamationTriangleIcon className="card-title text-red-500 h-12" />
        <p className="text-center">{message}</p>
      </div>
    </div>
	);
}
