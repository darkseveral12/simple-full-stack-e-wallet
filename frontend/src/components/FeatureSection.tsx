import { IoLockClosedSharp } from "react-icons/io5";
import { RiSparkling2Line } from "react-icons/ri";

import {
  IoFlash,
  IoStatsChart,
  IoCard,
  IoTime,
  IoShieldCheckmark,
} from "react-icons/io5";

const cardBase =
  "card card-border bg-base-100 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl";

const iconBase =
  "badge badge-soft badge-sm badge-square p-0 flex items-center justify-center w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-110";

const FeatureSection = () => {
  return (
    <div className="w-full pb-24 bg-base-100 flex  flex-col justify-center items-center ">
      {/* Secure */}
      <div className="flex flex-col items-center justify-center gap-4 pb-8 text-center">
        <span className="badge badge-soft badge-primary flex items-center gap-2">
          <RiSparkling2Line />
          Our Features
        </span>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
          We build finance that feels simple
        </h1>

        <p className="text-base-content/70 max-w-md">
          Manage your money with speed, security, and clarity. Designed to help
          you send, track, and grow your finances without complexity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-30">
        <div className={`${cardBase} hover:border-primary group`}>
          <div className="card-body">
            <span className={`${iconBase} badge-primary`}>
              <IoLockClosedSharp />
            </span>
            <h2 className="card-title">Secure Transactions</h2>
            <p>
              Your money is protected with end-to-end encryption, multi-factor
              authentication, and real-time fraud detection.
            </p>
          </div>
        </div>

        {/* Instant Transfer */}
        <div className={`${cardBase} hover:border-accent group`}>
          <div className="card-body">
            <span className={`${iconBase} badge-accent`}>
              <IoFlash />
            </span>
            <h2 className="card-title">Instant Transfers</h2>
            <p>
              Send and receive money instantly without delays—fast, seamless,
              and available 24/7.
            </p>
          </div>
        </div>

        {/* Smart Insights */}
        <div className={`${cardBase} hover:border-secondary group`}>
          <div className="card-body">
            <span className={`${iconBase} badge-secondary`}>
              <IoStatsChart />
            </span>
            <h2 className="card-title">Smart Insights</h2>
            <p>
              Track your spending habits with clear analytics so you can manage
              your money better every day.
            </p>
          </div>
        </div>

        {/* Easy Payments */}
        <div className={`${cardBase} hover:border-info group`}>
          <div className="card-body">
            <span className={`${iconBase} badge-info`}>
              <IoCard />
            </span>
            <h2 className="card-title">Easy Payments</h2>
            <p>
              Pay bills, shop online, and scan QR codes with a smooth and simple
              checkout experience.
            </p>
          </div>
        </div>

        {/* Transaction History */}
        <div className={`${cardBase} hover:border-warning group`}>
          <div className="card-body">
            <span className={`${iconBase} badge-warning`}>
              <IoTime />
            </span>
            <h2 className="card-title">Transaction History</h2>
            <p>
              View all your transactions in one place with full details,
              timestamps, and easy filtering.
            </p>
          </div>
        </div>

        {/* Account Protection */}
        <div className={`${cardBase} hover:border-error group`}>
          <div className="card-body">
            <span className={`${iconBase} badge-error`}>
              <IoShieldCheckmark />
            </span>
            <h2 className="card-title">Account Protection</h2>
            <p>
              Advanced security layers protect your account from unauthorized
              access and suspicious activity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
