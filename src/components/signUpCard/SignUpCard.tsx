export interface SignUpCardProps {
  signUpAction: (formData: FormData) => Promise<void>;
}

export function SignUpCard({ signUpAction }: SignUpCardProps): JSX.Element {
  return (
    <div className="card shadow-lg">
      <div className="card-body flex flex-col justify-center items-center">
        <form action={signUpAction} className="space-y-2">
          <div className="form-control">
            <label className="label" htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              placeholder="Brutus Buckeye"
              type="text"
              className="input input-bordered w-full h-12"
            />
          </div>
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
          <div className="form-control">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
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
