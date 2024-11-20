export interface SignInCardProps {
  signInAction: (formData: FormData) => Promise<void>;
}

export function SignInCard({ signInAction }: SignInCardProps): JSX.Element {
  return (
    <div className="card shadow-lg">
      <div className="card-body flex flex-col justify-center items-center">
        <form action={signInAction} className="space-y-2">
          <div className="form-control">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="buckeye.1@osu.edu"
              type="email"
              className="input input-bordered w-full h-12"
            />
          </div>
          <button
            className="btn btn-primary w-full h-12 flex items-center justify-center"
            type="submit"
          >
            Sign In/Up
          </button>
        </form>
      </div>
    </div>
  );
}
