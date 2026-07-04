import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section
      className="
      w-full
      bg-white
      dark:bg-[#0f0f0f]
      px-5
      py-10
      transition-all
      duration-300
      overflow-hidden
    "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        className="w-full"
      >
        {/* CTA BOX */}
        <div
          className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-cover
          bg-center
          min-h-[260px]
          lg:min-h-[280px]
          flex
          items-center
          bg-orange-500
        "
          style={{
            backgroundImage:
              "url('/final-cta-bg.webp')",
          }}
        >
          {/* Overlay glow */}
          <div
            className="
            absolute
            top-0
            right-0
            w-[280px]
            h-[280px]
            rounded-full
            bg-white/10
            blur-[90px]
            pointer-events-none
          "
          />

          <div
            className="
            grid
            lg:grid-cols-2
            items-center
            w-full
            relative
            z-10
          "
          >
            {/* LEFT IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
              className="
              hidden
              lg:flex
              items-end
              h-full
            "
            >
              <img
                
                src="/final-cta.webp"
                alt="Phone Guru CTA"
                loading="lazy"
                className="
                w-full
                max-w-[420px]
                object-contain
              "
              />
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="
              py-10
              lg:py-0
              text-center
              lg:text-left
              px-6
              lg:px-0
            "
            >
              {/* HEADING */}
              <motion.h2
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
                  delay: 0.25,
                }}
                className="
                text-2xl
                md:text-3xl
                lg:text-4xl
                font-bold
                text-white
                leading-tight
                max-w-[580px]
              "
              >
                Technology
                should
                connect
                families,
                not divide
                generations.
              </motion.h2>

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
                    transition:
                      {
                        staggerChildren:
                          0.12,
                      },
                  },
                }}
                className="
                flex
                flex-col
                sm:flex-row
                items-center
                lg:items-start
                gap-5
                mt-8
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
                >
                  <Link
                    to="/learner/login"
                    className="
                    w-full
                    sm:w-auto
                    bg-white
                    dark:bg-[#181818]
                    text-orange-500
                    hover:bg-orange-100
                    dark:hover:bg-[#222]
                    transition-all
                    duration-300
                    px-8
                    py-4
                    rounded-2xl
                    text-lg
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                  >
                    <motion.div
                      whileHover={{
                        rotate: 8,
                      }}
                    >
                      <PersonSearchIcon />
                    </motion.div>

                    Request Help
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
                >
                  <Link
                    to="/tutor/login"
                    className="
                    w-full
                    sm:w-auto
                    border-2
                    border-white
                    text-white
                    hover:bg-white/10
                    dark:hover:bg-black/20
                    hover:text-orange-200
                    transition-all
                    duration-300
                    px-8
                    py-4
                    rounded-2xl
                    text-lg
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                  >
                    <motion.div
                      whileHover={{
                        rotate: 8,
                      }}
                    >
                      <PersonAddAltIcon />
                    </motion.div>

                    Become Tutor
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;