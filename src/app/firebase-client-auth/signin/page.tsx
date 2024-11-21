"use client";

import SignInCard from "@components/signInCard/SignInCard";

import { fbAuth } from "@lib/firebase/firebaseClientApp";

import signInAction from "@components/signInCard/signInAction";
import { useAuthContext } from "@contexts/authContext/AuthContext";

export default function SignInPage() {
  const { user, authContextLoading, authContextError } = useAuthContext();
  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-10">
      <p>Firebase Client Auth Service is {fbAuth ? "defined" : "undefined"}.</p>

      <p>User is {user ? "defined" : "undefined"}.</p>

      <SignInCard signInAction={signInAction} />
    </div>
  );
}
