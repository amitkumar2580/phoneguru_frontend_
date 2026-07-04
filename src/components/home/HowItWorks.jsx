import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      image: "/images/step1.webp",
      title: "Choose What You Want to Learn",
      desc: "Select the topic you need help with and fill your details.",
    },

    {
      id: 2,
      image: "/images/step2.webp",
      title: "Nearby Tutor Accepts the Request",
      desc: "A verified volunteer confirms and connects.",
    },

    {
      id: 3,
      image: "/images/step3.webp",
      title: "Learn Comfortably at Home",
      desc: "One-on-one guidance at your pace.",
    },
  ];

  return (
    <section
      id="how-it-works"
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
          className="text-center"
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
            How{" "}
            <span className="text-orange-500">
              Phone Guru
            </span>{" "}
            Works
          </h2>
        </motion.div>

        {/* CARDS */}
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
          mt-14
        "
        >
          {steps.map((step) => (
            <div
              key={step.id}
              className="
                relative
                border
                border-orange-100
                dark:border-[#2a2a2a]
                rounded-3xl
                p-6
                bg-[#fffaf5]
                dark:bg-[#181818]
                transition-all
                duration-300
                hover:border-orange-500/40
                hover:shadow-[0_0_20px_rgba(249,115,22,0.08)]
              "
            >
              {/* NUMBER */}
              <div
                className="
                  absolute
                  top-5
                  left-5
                  w-11
                  h-11
                  rounded-full
                  bg-orange-500
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-bold
                "
              >
                {step.id}
              </div>

              {/* CONTENT */}
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  items-center
                  gap-6
                  pt-10
                "
              >
                {/* IMAGE */}
                <div
                  className="
                    w-[150px]
                    flex-shrink-0
                  "
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="
                      w-full
                      object-contain
                    "
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-black
                      dark:text-white
                      leading-8
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      text-gray-500
                      dark:text-gray-400
                      mt-3
                      leading-7
                      text-sm
                      md:text-base
                    "
                  >
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* DESKTOP DOTTED LINE */}
              {step.id !== 3 && (
                <div
                  className="
                    hidden
                    lg:block
                    absolute
                    top-1/2
                    -right-10
                    w-10
                    border-t-4
                    border-dotted
                    border-orange-400
                  "
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;