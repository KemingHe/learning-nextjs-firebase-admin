"use client";

import Link from "next/link";

import { ErrorCard } from "@components/ErrorCard";
import { LoadingCard } from "@components/LoadingCard";
import SignInCard from "@components/signInCard/SignInCard";

import { addArbitraryDocumentToFirestore } from "@app/auth/signin/actions";
import { useAuthContext } from "@contexts/authContext/AuthContext";

export default function SignInPage() {
	const { user, authContextLoading, authContextError } = useAuthContext();
	return (
		<div className="flex flex-col justify-center items-center p-5 space-y-10">
			<Link href="/">To Homepage</Link>
			<button onClick={() => addArbitraryDocumentToFirestore()} type="button">
				Add Arbitrary Document to Firestore
			</button>
			<SignInCard />
			<LoadingCard message={"This is a loading message."} />
			<ErrorCard message={"This is an error message."} />
		</div>
	);
}
