import GroupsIcon from "@mui/icons-material/Groups";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import {
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

import {
  useEffect,
} from "react";

const CountUpNumber =
  () => {
    const count =
      useMotionValue(
        0
      );

    const rounded =
      useTransform(
        count,
        (latest) =>
          Math.floor(
            latest
          ).toLocaleString()
      );

    useEffect(() => {
      const controls =
        animate(
          count,
          540,
          {
            duration: 2,
            ease:
              "easeOut",
          }
        );

      return () =>
        controls.stop();
    }, []);

    return (
      <motion.h3
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.2,
        }}
        className="
        text-5xl
        font-bold
        text-orange-500
        mt-6
      "
      >
        <motion.span>
          {rounded}
        </motion.span>
        +
      </motion.h3>
    );
  };

const VolunteerImpactSection =
  () => {
    const navigate =
      useNavigate();

    const leaderboard =
      [
        {
          id: 1,
          name:
            "Arjun Sharma",
          points:
            "820 Points",
        },

        {
          id: 2,
          name:
            "Priya Verma",
          points:
            "760 Points",
        },

        {
          id: 3,
          name:
            "Rohan Mehta",
          points:
            "690 Points",
        },
      ];

    return (
      <section
        id="volunteer-impact"
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
          <div className="grid lg:grid-cols-12 gap-6">
            {/* CERTIFICATE */}
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
                duration: 0.6,
              }}
              className="
              lg:col-span-6
              border
              border-orange-100
              dark:border-[#2a2a2a]
              bg-[#fffaf5]
              dark:bg-[#181818]
              rounded-3xl
              overflow-hidden
              transition-all
              duration-300
            "
            >
              <motion.img
                animate={{
                  y: [
                    0,
                    -6,
                    0,
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat:
                    Infinity,
                  ease:
                    "easeInOut",
                }}
                src="/certificate.webp"
                alt="Certificate"
                loading="lazy"
                className="
                w-full
                h-full
                object-contain
                bg-[#fffaf5]
                dark:bg-[#181818]
              "
              />
            </motion.div>

            {/* LEADERBOARD */}
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
                delay: 0.1,
                duration: 0.5,
              }}
              className="
              lg:col-span-3
              border
              border-orange-100
              dark:border-[#2a2a2a]
              bg-[#fffaf5]
              dark:bg-[#181818]
              rounded-3xl
              p-7
            "
            >
              <h3
                className="
                text-2xl
                font-bold
                text-black
                dark:text-white
              "
              >
                Top
                Volunteers
              </h3>

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
                          0.1,
                      },
                  },
                }}
                className="
                mt-8
                space-y-6
              "
              >
                {leaderboard.map(
                  (
                    user,
                    index
                  ) => (
                    <motion.div
                      key={
                        user.id
                      }
                      variants={{
                        hidden:
                          {
                            opacity: 0,
                            x: -15,
                          },

                        visible:
                          {
                            opacity: 1,
                            x: 0,
                          },
                      }}
                      whileHover={{
                        x: 4,
                      }}
                      className="
                      flex
                      items-center
                      justify-between
                    "
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{
                            scale:
                              1.08,
                          }}
                          className="
                          w-10
                          h-10
                          rounded-full
                          bg-orange-100
                          flex
                          items-center
                          justify-center
                          text-lg
                        "
                        >
                          {index ===
                            0 &&
                            "🥇"}

                          {index ===
                            1 &&
                            "🥈"}

                          {index ===
                            2 &&
                            "🥉"}
                        </motion.div>

                        <h4
                          className="
                          font-semibold
                          text-black
                          dark:text-white
                        "
                        >
                          {
                            user.name
                          }
                        </h4>
                      </div>

                      <p
                        className="
                        text-gray-500
                        dark:text-gray-400
                        text-sm
                      "
                      >
                        {
                          user.points
                        }
                      </p>
                    </motion.div>
                  )
                )}
              </motion.div>

              <motion.button
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale:
                    0.98,
                }}
                onClick={() =>
                  navigate(
                    "/tutor/leaderboard"
                  )
                }
                className="
                mt-10
                w-full
                bg-orange-500
                hover:bg-orange-600
                transition-all
                duration-300
                text-white
                font-semibold
                py-4
                rounded-2xl
              "
              >
                View
                Leaderboard
              </motion.button>
            </motion.div>

            {/* IMPACT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
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
              lg:col-span-3
              border
              border-orange-100
              dark:border-[#2a2a2a]
              bg-[#fffaf5]
              dark:bg-[#181818]
              rounded-3xl
              p-7
              flex
              flex-col
              items-center
              justify-center
              text-center
            "
            >
              <motion.div
                animate={{
                  y: [
                    0,
                    -8,
                    0,
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat:
                    Infinity,
                  ease:
                    "easeInOut",
                }}
              >
                <GroupsIcon
                  sx={{
                    fontSize: 100,
                    color:
                      "#f97316",
                  }}
                />
              </motion.div>

             <CountUpNumber />

              <p
                className="
                text-2xl
                font-semibold
                text-black
                dark:text-white
                mt-5
              "
              >
                Seniors
                Empowered
              </p>

              <p
                className="
                text-gray-500
                dark:text-gray-400
                mt-3
                text-lg
              "
              >
                Across 350+
                Cities
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

export default
  VolunteerImpactSection;