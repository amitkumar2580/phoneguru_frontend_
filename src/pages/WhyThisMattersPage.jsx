import { motion } from "framer-motion";
import {
  HeartHandshake,
  Smartphone,
  Users,
  ShieldCheck,
} from "lucide-react";

const WhyThisMattersPage = () => {
  const problems = [
    {
      icon: <Smartphone size={34} />,
      title: "Technology Is Moving Too Fast",
      desc:
        "Many senior citizens still struggle with smartphones, online payments, OTPs and digital services.",
    },

    {
      icon: <Users size={34} />,
      title: "A Growing Digital Gap",
      desc:
        "Younger generations adapt quickly to technology, while seniors often feel left behind or dependent.",
    },

    {
      icon: <HeartHandshake size={34} />,
      title: "Loss Of Confidence",
      desc:
        "Simple tasks like video calling family or paying bills can feel stressful without patient guidance.",
    },
  ];

  const moments = [
    {
      title: "Missing Family Moments",
      desc:
        "A grandparent unable to join a family video call because they don’t know how the app works.",
    },

    {
      title: "Fear Of Online Payments",
      desc:
        "Many seniors hesitate to use UPI or online banking due to fear of mistakes or scams.",
    },

    {
      title: "Government Services Confusion",
      desc:
        "Booking appointments, downloading forms or accessing digital services often becomes frustrating.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#faf7f2] dark:bg-[#0f0f0f] overflow-hidden px-5 py-20">

      {/* Blur background */}
      <div className="absolute top-10 left-10 size-80 rounded-full bg-orange-300/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 size-80 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HERO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center max-w-4xl mx-auto"
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
            Why Phone Guru Matters
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
            Technology Should
            <br />
            <span className="text-orange-500">
              Connect Generations
            </span>
            , Not Divide Them
          </h1>

          <p
            className="
            mt-6
            text-lg
            leading-8
            text-gray-500
            dark:text-gray-400
            max-w-3xl
            mx-auto
          "
          >
            While technology grows rapidly,
            many senior citizens still struggle
            with smartphones and digital tools.
            Phone Guru exists to bridge that gap
            with patient, nearby human support.
          </p>
        </motion.div>

        {/* Problems */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {problems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              className="
                rounded-[36px]
                bg-white/70
                dark:bg-[#181818]/70
                backdrop-blur-xl
                border
                border-orange-100
                dark:border-[#2a2a2a]
                p-8
              "
            >
              <div className="text-orange-500">
                {item.icon}
              </div>

              <h3
                className="
                text-2xl
                font-bold
                text-[#222]
                dark:text-white
                mt-6
              "
              >
                {item.title}
              </h3>

              <p
                className="
                mt-4
                leading-8
                text-gray-600
                dark:text-gray-400
              "
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Real Moments */}
        <div className="mt-28">
          <h2
            className="
            text-4xl
            font-bold
            text-center
            text-[#222]
            dark:text-white
          "
          >
            Everyday Situations
            <span className="text-orange-500">
              {" "}That Matter
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {moments.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-[36px]
                  bg-[#fffaf5]
                  dark:bg-[#181818]
                  border
                  border-orange-100
                  dark:border-[#2a2a2a]
                  p-8
                "
              >
                <h3
                  className="
                  text-2xl
                  font-bold
                  text-[#222]
                  dark:text-white
                "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-4
                  text-gray-600
                  dark:text-gray-400
                  leading-8
                "
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Block */}
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
            mt-28
            rounded-[48px]
            bg-orange-500
            p-10
            md:p-16
            text-center
            text-white
          "
        >
          <ShieldCheck
            size={60}
            className="mx-auto"
          />

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Why Phone Guru Exists
          </h2>

          <p
            className="
            mt-6
            text-lg
            leading-9
            max-w-4xl
            mx-auto
            text-white/90
          "
          >
            Phone Guru was created to make
            digital learning easier, more human
            and less intimidating for senior
            citizens. A little patient guidance
            can help someone become more
            independent, confident and connected
            to the people they care about.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyThisMattersPage;