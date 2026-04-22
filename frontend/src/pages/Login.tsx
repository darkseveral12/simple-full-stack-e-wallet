import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-2 flex-col">
      <form className="form-responsive">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>

            <h1 className="font-black text-3xl">
              E-<span className="text-accent">Cash</span>
            </h1>
          </div>
          <h1 className="text-xl m-4">Login with your details</h1>
        </div>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <label className="input w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 opacity-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <input type="search" required placeholder="Enter your email" />
          </label>
          <label className="label">Password</label>
          <label className="input w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 opacity-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>

            <input type="search" required placeholder="Enter your password" />
          </label>
          <label className="label mt-2">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-sm"
            />
            Remember me
          </label>
          <button className="btn btn-accent rounded-full mt-4">Login</button>
        </fieldset>
        <div className="divider">OR</div>
      </form>
      <div className="flex flex-col gap-6 w-full md:w-1/2 lg:w-1/3">
        <button className="w-full btn rounded-full flex gap-3 ">
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-center">
          Don't have an account?
          <Link className="link link-accent link-hover" to={"/signup"}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
