"use client";

import ErrorCard from "@components/ErrorCard";
import LoadingCard from "@components/LoadingCard";
import { NavLinkButton } from "@components/NavLinkButton";
import SignInCard from "@components/signInCard/SignInCard";
import SignUpCard from "@components/signUpCard/SignUpCard";

export default function DebugPage(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 m-2">
      <NavLinkButton href="/" text="Home" />
      <LoadingCard message="This is a loading message." />
      <ErrorCard message="This is an error message." />
      <SignInCard signInAction={async (formData: FormData) => {}} />
      <SignUpCard signUpAction={async (formData: FormData) => {}} />
    </div>
  );
}
