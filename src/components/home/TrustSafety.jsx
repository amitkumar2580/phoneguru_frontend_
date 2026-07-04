import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PeopleIcon from "@mui/icons-material/People";

import { motion } from "framer-motion";

const TrustSafety = () => {
  const safetyItems = [
    {
      id: 1,
      icon: (
        <VerifiedUserIcon
          sx={{
            fontSize: 34,
            color: "#ea580c",
          }}
        />
      ),
      title: "Verified Tutors",
      desc:
        "All volunteers are background verified.",
    },

    {
      id: 2,
      icon: (
        <MobileFriendlyIcon
          sx={{
            fontSize: 34,
            color: "#ea580c",
          }}
        />
      ),
      title: "OTP Verification",
      desc:
        "Every session is secured with OTP verification.",
    },

    {
      id: 3,
      icon: (
        <GroupAddIcon
          sx={{
            fontSize: 34,
            color: "#ea580c",
          }}
        />
      ),
      title: "Family Coordination",
      desc:
        "Family members are kept in the loop for complete peace of mind.",
    },

    {
      id: 4,
      icon: (
        <PeopleIcon
          sx={{
            fontSize: 34,
            color: "#ea580c",
          }}
        />
      ),
      title: "Safe Learning",
      desc:
        "Learning happens only at your home or preferred place.",
    },

    {
      id: 5,
      icon: (
        <PeopleIcon
          sx={{
            fontSize: 34,
            color: "#ea580c",
          }}
        />
      ),
      title: "Community Support",
      desc:
        "Dedicated support and reporting system for safety.",
    },
  ];

  return (
    <section
      id="trust-safety"
      className="
      w-full
      bg-white
      dark:bg-[#0f0f0f]
      px-5
      py-14
      transition-all
      duration-300
      overflow-hidden
    "
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <h2
            className="
            text-3xl
            md:text-5xl
            font-bold
            text-black
            dark:text-white
          "
          >
            Trust{" "}
            <span className="text-orange-500">
              & Safety
            </span>
          </h2>
        </motion.div>

        {/* MAIN WRAPPER */}
        <div
          className="
          bg-[#fff7f0]
          dark:bg-[#151515]
          rounded-3xl
          p-6
          mt-12
          transition-all
          duration-300
        "
        >
          <div
            className="
            grid
            lg:grid-cols-12
            gap-6
            items-stretch
          "
          >
            {/* CARDS */}
            <div
              className="
              lg:col-span-8
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-5
              gap-5
            "
            >
              {safetyItems.map(
                (item) => (
                  <div
                    key={item.id}
                    className="
                    border
                    border-orange-100
                    dark:border-[#2a2a2a]
                    bg-white
                    dark:bg-[#181818]
                    rounded-2xl
                    p-5
                    min-h-[220px]
                    transition-all
                    duration-300
                    hover:border-orange-500/40
                    hover:shadow-[0_0_20px_rgba(249,115,22,0.08)]
                  "
                  >
                    {/* ICON */}
                    <div>
                      {item.icon}
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                      text-lg
                      font-bold
                      text-black
                      dark:text-white
                      mt-5
                      leading-7
                    "
                    >
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p
                      className="
                      text-gray-500
                      dark:text-gray-400
                      text-sm
                      leading-6
                      mt-3
                    "
                    >
                      {item.desc}
                    </p>
                  </div>
                )
              )}
            </div>

            {/* IMAGE */}
            <div
              className="
              hidden
              lg:block
              lg:col-span-4
            "
            >
              <img
                src="/trust-safety.webp"
                alt="Trust Safety"
                loading="lazy"
                className="
                w-full
                h-full
                object-cover
                rounded-3xl
              "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafety;