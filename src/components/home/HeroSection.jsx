import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full overflow-hidden"
    >
      {/* HERO IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.03,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="w-full"
      >
        <img
          src="/banner.webp"
          alt="Phone Guru Hero Banner"
          className="
          w-full
          h-full
          object-cover
        "
        />
      </motion.div>

      {/* CTA SECTION */}
      <div
        className="
        relative
        bg-white
        dark:bg-[#0f0f0f]
        px-5
        py-10
        transition-all
        duration-300
      "
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* BUTTONS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren:
                    0.12,
                },
              },
            }}
            className="
            w-full
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-5
          "
          >
            {/* REQUEST HELP */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/learner/login"
                className="
                group
                relative
                overflow-hidden
                w-full
                sm:w-[320px]
                border-2
                border-orange-500
                text-orange-500
                hover:bg-orange-500
                hover:text-white
                transition-all
                duration-300
                text-lg
                font-semibold
                py-4
                rounded-2xl
                flex
                items-center
                justify-center
                gap-3
                shadow-sm
                hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]
              "
              >
                <motion.div
                  whileHover={{
                    rotate: 8,
                  }}
                >
                  <PersonSearchIcon />
                </motion.div>

                <span>
                  Request Help
                </span>

                <div
                  className="
                  absolute
                  inset-0
                  bg-orange-500
                  -z-10
                  translate-y-full
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                "
                />
              </Link>
            </motion.div>

            {/* BECOME TUTOR */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/tutor/login"
                className="
                group
                relative
                overflow-hidden
                w-full
                sm:w-[320px]
                bg-orange-500
                hover:bg-orange-600
                transition-all
                duration-300
                text-white
                text-lg
                font-semibold
                py-4
                rounded-2xl
                border
                border-orange-500
                flex
                items-center
                justify-center
                gap-3
                shadow-md
                hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]
              "
              >
                <motion.div
                  whileHover={{
                    rotate: 8,
                  }}
                >
                  <PersonAddAlt1Icon />
                </motion.div>

                <span>
                  Become Tutor
                </span>

                <div
                  className="
                  absolute
                  inset-0
                  bg-white/10
                  translate-y-full
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                "
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* PARAGRAPH */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
            className="
            text-center
            text-gray-600
            dark:text-gray-300
            text-base
            md:text-lg
            leading-8
            max-w-2xl
            mt-8
          "
          >
            Many senior
            citizens still
            struggle with
            smartphones,
            online payments,
            and digital
            services.
            <span className="text-orange-500 font-semibold">
              {" "}
              Phone Guru{" "}
            </span>
            connects them
            with nearby
            people who can
            help patiently
            and respectfully.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;