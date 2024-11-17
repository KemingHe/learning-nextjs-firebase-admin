"use client";

import SignInCard from "@components/signInCard/SignInCard";
import { ErrorCard } from "@components/ErrorCard";
import { LoadingCard } from "@components/LoadingCard";

import { fbAuth } from "@lib/firebaseClientApp";
import { useAuthContext } from "@src/contexts/authContext/AuthContext";

export default function SignInPage() {
	const { user, authContextLoading, authContextError } = useAuthContext();
	return (
		<div className="flex flex-col justify-center items-center p-5 space-y-10">
			<SignInCard />
			<LoadingCard message={"This is a loading message."} />
			<ErrorCard message={"This is an error message."} />
		</div>
	);
}
