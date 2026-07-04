import { motion } from "framer-motion";
import {
  Lightbulb,
  Rocket,
  Code2,
} from "lucide-react";

const TeamPage = () => {
  const techStack = [
    "React.js",
    "Redux Toolkit",
    "React Router",
    "React Hook Form",
    "Tailwind CSS",
    "Material UI",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT Auth",
    "REST APIs",
    "Geolocation",
  ];

  return (
    <section className="relative min-h-screen bg-[#faf7f2] dark:bg-[#0f0f0f] overflow-hidden px-5 py-20">

      {/* Blur spheres */}
      <div className="absolute top-10 left-10 size-80 rounded-full bg-orange-300/20 blur-[120px]" />
      <div className="absolute bottom-20 right-10 size-80 rounded-full bg-orange-500/10 blur-[120px]" />

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
            Meet The Creator
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
            Building Technology
            <br />
            With{" "}
            <span className="text-orange-500">
              Human Purpose
            </span>
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
            Phone Guru was created with one
            simple idea — technology should
            reduce distance between generations,
            not create more of it.
          </p>
        </motion.div>

        {/* Founder Section */}
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
            mt-20
            grid
            lg:grid-cols-2
            gap-10
            items-center
          "
        >
          {/* Image */}
          <div
            className="
            relative
            rounded-[40px]
            overflow-hidden
            border
            border-orange-100
            dark:border-[#2a2a2a]
            bg-white/70
            dark:bg-[#181818]/70
            backdrop-blur-xl
            p-8
          "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-transparent dark:from-orange-500/5" />

            <img
              src="/Amit.webp"
              alt="Amit Kumar"
              loading="lazy"
              className="
                relative
                z-10
                w-full
                max-w-[380px]
                mx-auto
                rounded-[32px]
                object-cover
                shadow-2xl
              "
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">
              Founder & Full Stack Developer
            </span>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-bold
              text-[#222]
              dark:text-white
              mt-4
            "
            >
              Amit Kumar
            </h2>

            <p
              className="
              mt-6
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-400
            "
            >
              I’m an Information Technology
              graduate and the creator of
              Phone Guru.
            </p>

            <p
              className="
              mt-5
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-400
            "
            >
              I noticed that many senior
              citizens still struggle with
              smartphones, online payments,
              video calls and digital services.
              At the same time, younger
              generations move fast with
              technology — creating a digital
              gap between them.
            </p>

            <p
              className="
              mt-5
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-400
            "
            >
              Phone Guru was built to bridge
              that gap through nearby,
              patient and respectful guidance
              — helping seniors become more
              independent and confident with
              technology.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {/* WHY */}
          <motion.div
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
            <Lightbulb
              size={42}
              className="text-orange-500"
            />

            <h3
              className="
              text-2xl
              font-bold
              text-[#222]
              dark:text-white
              mt-6
            "
            >
              Why Phone Guru?
            </h3>

            <p
              className="
              mt-4
              leading-8
              text-gray-600
              dark:text-gray-400
            "
            >
              Many elderly people feel left
              behind because technology changes
              quickly. Phone Guru exists to
              make digital learning feel human,
              local and approachable.
            </p>
          </motion.div>

          {/* TECH */}
          <motion.div
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
            <Code2
              size={42}
              className="text-orange-500"
            />

            <h3
              className="
              text-2xl
              font-bold
              text-[#222]
              dark:text-white
              mt-6
            "
            >
              Built With
            </h3>

            <div className="flex flex-wrap gap-3 mt-6">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-orange-50
                    dark:bg-[#22160f]
                    text-orange-600
                    text-sm
                    font-medium
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* FUTURE */}
          <motion.div
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
            <Rocket
              size={42}
              className="text-orange-500"
            />

            <h3
              className="
              text-2xl
              font-bold
              text-[#222]
              dark:text-white
              mt-6
            "
            >
              Future Vision
            </h3>

            <p
              className="
              mt-4
              leading-8
              text-gray-600
              dark:text-gray-400
            "
            >
              Phone Guru is only the beginning.
              The vision is to create a trusted
              support ecosystem where senior
              citizens across India can easily
              learn digital skills without fear.
            </p>

            <ul className="mt-5 space-y-3 text-gray-600 dark:text-gray-400">
              <li>• Multi-language support</li>
              <li>• Verified volunteer network</li>
              <li>• Better accessibility</li>
              <li>• Wider city coverage</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;