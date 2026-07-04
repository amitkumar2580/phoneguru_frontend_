import { motion } from "framer-motion";

const HowItWorksPage = () => {
  const steps = [
    {
      id: "01",
      image: "/how-it-works/step1.webp",
      title: "Create Learning Request",
      desc: "Choose what you want to learn, preferred time and submit a request.",
    },

    {
      id: "02",
      image: "/how-it-works/step2.webp",
      title: "Nearby Tutor Gets Request",
      desc: "Nearby volunteers receive learner requests and review details.",
    },

    {
      id: "03",
      image: "/how-it-works/step3.webp",
      title: "Tutor Accepts Request",
      desc: "Tutor accepts and becomes assigned to the learner instantly.",
    },

    {
      id: "04",
      image: "/how-it-works/step4.webp",
      title: "Session Scheduled",
      desc: "Tutor schedules a suitable date and time for the session.",
    },

    {
      id: "05",
      image: "/how-it-works/step5.webp",
      title: "Learning Begins",
      desc: "One-on-one patient learning starts at the learner’s pace.",
    },

    {
      id: "06",
      image: "/how-it-works/step6.webp",
      title: "Learning Completed",
      desc: "Learner rates tutor and tutor earns points & rewards.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#faf7f2] dark:bg-[#0f0f0f] px-5 py-20 overflow-hidden">

      {/* Orange blur background */}
      <div className="absolute top-20 left-10 size-72 bg-orange-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 size-72 bg-orange-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <span
            className="
            px-5
            py-2
            rounded-full
            bg-orange-100
            text-orange-600
            font-semibold
            text-sm
          "
          >
            Complete Workflow
          </span>

          <h1
            className="
            text-4xl
            md:text-6xl
            font-bold
            text-[#222]
            dark:text-white
            mt-6
            leading-tight
          "
          >
            How{" "}
            <span className="text-orange-500">
              Phone Guru
            </span>{" "}
            Works
          </h1>

          <p
            className="
            mt-5
            text-lg
            leading-8
            text-gray-500
            dark:text-gray-400
          "
          >
            A simple journey that helps seniors
            receive patient guidance and become
            digitally independent.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                overflow-hidden
                rounded-[32px]
                bg-white
                dark:bg-[#181818]
                border
                border-orange-100
                dark:border-[#2a2a2a]
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="
                    w-full
                    h-[230px]
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Step badge */}
                <div
                  className="
                  absolute
                  top-4
                  left-4
                  px-4
                  py-2
                  rounded-full
                  bg-orange-500
                  text-white
                  font-bold
                  text-sm
                  shadow-lg
                "
                >
                  Step {step.id}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h2
                  className="
                  text-2xl
                  font-bold
                  text-[#222]
                  dark:text-white
                "
                >
                  {step.title}
                </h2>

                <p
                  className="
                  mt-4
                  text-gray-500
                  dark:text-gray-400
                  leading-7
                "
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
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
          className="
            mt-24
            rounded-[40px]
            bg-orange-500
            px-8
            py-16
            text-center
          "
        >
          <h2 className="text-4xl font-bold text-white">
            Simple guidance can change lives.
          </h2>

          <p className="text-white/80 mt-4 text-lg">
            Phone Guru helps seniors feel more independent,
            confident and connected.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksPage;