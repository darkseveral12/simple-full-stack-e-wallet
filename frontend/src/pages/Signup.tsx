import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center p-2 flex-col">
      <div className="form-responsive">
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
          <h1 className="text-xl m-4">Create your account</h1>
        </div>
        <button className="w-full btn  rounded-full flex gap-3 ">
          <FcGoogle size={20} />
          Continue with Google
        </button>
        <div className="divider">OR</div>
      </div>
      <form className="form-responsive">
        <fieldset className="fieldset">
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label className="label">First Name</label>
              <label className="input w-full">
                <input type="search" required placeholder="First Name" />
              </label>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label className="label">Last Name</label>
              <label className="input w-full">
                <input type="search" required placeholder="Last Name" />
              </label>
            </div>
          </div>
          <label className="label">Email</label>
          <label className="input w-full">
            <input type="search" required placeholder="Enter your email" />
          </label>
          <label className="label">Password</label>
          <label className="input w-full">
            <input type="search" required placeholder="Enter your password" />
          </label>

          <label className="label">Confirm Password</label>
          <label className="input w-full">
            <input type="search" required placeholder="Confirm your password" />
          </label>

          <button className="btn rounded-full btn-accent mt-4">Sign up</button>
        </fieldset>

        <p className="text-center mt-4">
          Don't have an account?
          <Link className="link link-accent link-hover" to={"/login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
