"use client";

export interface LoadingCardProps {
	message: string;
}

export function LoadingCard({
	message,
}: Readonly<LoadingCardProps>): JSX.Element {
	return (
		<div className="card shadow-lg">
			<div className="card-body flex flex-col justify-center items-center">
				<div className="card-title h-12">
					<span className="loading loading-spinner loading-lg" />
				</div>
				<p className="text-center">{message}</p>
			</div>
		</div>
	);
}
