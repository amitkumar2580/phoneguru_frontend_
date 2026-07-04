import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer
      className="
      w-full
      bg-white
      dark:bg-[#0f0f0f]
      border-t
      border-gray-200
      dark:border-[#222]
      px-5
      py-14
      transition-all
      duration-300
    "
    >
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="grid lg:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="flex items-center gap-3 w-fit"
            >
              <img 
                loading="lazy"
                src="/logo1.webp"
                alt="Phone Guru"
                className="w-12 object-contain dark:hidden"
              />

              <img
                loading="lazy"
                src="/pgLogo_dark.webp"
                alt="Phone Guru"
                className="w-12 object-contain hidden dark:block"
              />

              <h2 className="text-3xl font-bold">
                <span className="text-black dark:text-white">
                  Phone
                </span>

                <span className="text-orange-500">
                  Guru
                </span>
              </h2>
            </Link>

            <p
              className="
              text-gray-500
              dark:text-gray-400
              leading-8
              mt-5
              max-w-[420px]
            "
            >
              Helping senior citizens become
              digitally confident through
              nearby, patient and respectful
              guidance.
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-black dark:text-white">
              Explore
            </h3>

            <ul className="space-y-4 mt-5 text-gray-500 dark:text-gray-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition-all duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-orange-500 transition-all duration-300"
                >
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  to="/tutor/leaderboard"
                  className="hover:text-orange-500 transition-all duration-300"
                >
                  Leaderboard
                </Link>
              </li>

              <li>
                <Link
                  to="/team"
                  className="hover:text-orange-500 transition-all duration-300"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-black dark:text-white">
              Quick Start
            </h3>

            <ul className="space-y-4 mt-5 text-gray-500 dark:text-gray-400">

              <li>
                <Link
                  to="/learner/login"
                  className="hover:text-orange-500 transition-all duration-300"
                >
                  Request Help
                </Link>
              </li>

              <li>
                <Link
                  to="/tutor/login"
                  className="hover:text-orange-500 transition-all duration-300"
                >
                  Become Tutor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-black dark:text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-gray-500 dark:text-gray-400">
              <p>
                hello@phoneguru.in
              </p>

              <p>
                +91 9917471925
              </p>
              
            </div>

            {/* Socials */}
          
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
          mt-12
          pt-6
          border-t
          border-gray-200
          dark:border-[#222]
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-3
          text-sm
          text-gray-500
          dark:text-gray-400
        "
        >
          <p>
            © 2026 Phone Guru.
            All rights reserved.
          </p>

          <p>
            Built with purpose by
            {" "}
            <span className="text-orange-500 font-medium">
              Amit kumar
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;