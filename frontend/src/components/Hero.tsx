const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold leading-tight">
            Send, Save & Track Money Easily
          </h1>

          <p className="py-6 text-base-content/80">
            A simple and secure e-wallet that lets you send money instantly, pay
            bills, and monitor your expenses—all in one place.
          </p>

          <div className="flex gap-3 justify-center">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
