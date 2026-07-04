import {
  Trophy,
  Star,
  Award,
} from "lucide-react";

import {
  useEffect,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  getLeaderboard,
} from "../../redux/slices/tutorSlice";

import {
  fadeUp,
  stagger,
} from "../../utils/motion";

const LeaderBoard =
  () => {
    const dispatch =
      useDispatch();

    const {
      leaderboard,
    } = useSelector(
      (state) =>
        state.tutor
    );

    useEffect(() => {
      dispatch(
        getLeaderboard()
      );
    }, [dispatch]);

    const getRankStyle =
      (index) => {
        if (
          index === 0
        ) {
          return "bg-yellow-100 text-yellow-700 border-yellow-200";
        }

        if (
          index === 1
        ) {
          return "bg-gray-200 text-gray-700 border-gray-300";
        }

        if (
          index === 2
        ) {
          return "bg-orange-100 text-orange-700 border-orange-200";
        }

        return "bg-blue-100 text-blue-700 border-blue-200";
      };

    return (
      <section
        className="
        relative
        overflow-hidden
        min-h-screen
        bg-[#f8f4ee]
        dark:bg-[#0f0f0f]
        px-5
        py-10
      "
      >
        {/* BACKGROUND GLOW */}
        <div
          className="
          absolute
          top-[-120px]
          right-[-100px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-orange-400/20
          blur-[120px]
          pointer-events-none
        "
        />

        <div
          className="
          absolute
          top-[40%]
          left-[-120px]
          w-[280px]
          h-[280px]
          rounded-full
          bg-orange-300/20
          blur-[110px]
          pointer-events-none
        "
        />

        <div
          className="
          absolute
          bottom-[-120px]
          right-[20%]
          w-[260px]
          h-[260px]
          rounded-full
          bg-orange-500/10
          blur-[100px]
          pointer-events-none
        "
        />

        {/* DOT GRID */}
        <div
          className="
          absolute
          inset-0
          opacity-[0.05]
          dark:opacity-[0.08]
          pointer-events-none
        "
          style={{
            backgroundImage:
              "radial-gradient(#f97316 1px, transparent 1px)",
            backgroundSize:
              "22px 22px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-center mb-12"
          >
            <div
              className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-orange-100
              dark:bg-[#1a140d]
              text-orange-600
              font-semibold
              mb-5
            "
            >
              <Trophy
                size={18}
              />
              Top Performers
            </div>

            <h1
              className="
              text-4xl
              md:text-5xl
              font-bold
              text-[#222]
              dark:text-white
            "
            >
              Phone Guru
              Leaderboard
            </h1>

            <p
              className="
              text-gray-500
              dark:text-gray-400
              mt-4
              max-w-xl
              mx-auto
              text-lg
            "
            >
              Meet the
              highest
              performing
              tutors helping
              learners build
              digital
              confidence.
            </p>
          </motion.div>

          {/* LIST */}
          <motion.div
            variants={
              stagger
            }
            initial="hidden"
            animate="visible"
            className="space-y-5"
          >
            {leaderboard?.map(
              (
                tutor,
                index
              ) => (
                <motion.div
                  key={
                    tutor._id
                  }
                  variants={
                    fadeUp
                  }
                  whileHover={{
                    y: -5,
                    transition:
                      {
                        duration: 0.2,
                      },
                  }}
                  className="
                  bg-white/80
                  dark:bg-[#181818]/90
                  backdrop-blur-xl
                  border
                  border-[#efe5d9]
                  dark:border-[#2a2a2a]
                  rounded-[32px]
                  p-6
                  flex
                  items-center
                  justify-between
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                "
                >
                  {/* LEFT */}
                  <div className="flex items-center gap-5">
                    <div
                      className={`
                      size-14
                      rounded-full
                      border
                      flex
                      items-center
                      justify-center
                      font-bold
                      text-lg
                      shrink-0
                      ${getRankStyle(
                        index
                      )}
                    `}
                    >
                      #
                      {index +
                        1}
                    </div>

                    <div>
                      <h2
                        className="
                        text-xl
                        md:text-2xl
                        font-bold
                        text-[#222]
                        dark:text-white
                      "
                      >
                        {
                          tutor.name
                        }
                      </h2>

                      <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <Star
                          size={
                            16
                          }
                          className="text-yellow-500"
                        />

                        <span>
                          {tutor.rating?.toFixed(
                            1
                          ) ||
                            "0.0"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="text-right">
                    <p
                      className="
                      text-2xl
                      font-bold
                      text-orange-500
                    "
                    >
                      {
                        tutor.points
                      }
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      points
                    </p>

                    {tutor.certificateUnlocked && (
                      <div
                        className="
                        mt-3
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        bg-green-100
                        dark:bg-[#102417]
                        text-green-700
                        dark:text-green-400
                        text-sm
                        font-semibold
                      "
                      >
                        <Award
                          size={
                            15
                          }
                        />
                        Certified
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>
    );
  };

export default
  LeaderBoard;