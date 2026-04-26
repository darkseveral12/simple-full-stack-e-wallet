const Hero = () => {
  return (
    <section className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold leading-tight">
            Secure & Simple Digital Payments for Everyone
          </h1>
          <p className="py-6 text-base-content/70">
            Manage your money with confidence. Send and receive funds instantly,
            pay bills safely, and track your spending—all in one secure and
            easy-to-use e-wallet designed to protect your transactions and help
            you stay in control of your finances.
          </p>
          <div className="flex justify-center items-center gap-4">
            <button className="btn btn-accent align-middle">
              Get Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            <button className="btn btn-ghost align-middle">
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
