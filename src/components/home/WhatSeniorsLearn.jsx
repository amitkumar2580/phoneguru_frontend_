import { motion } from "framer-motion";

const WhatSeniorsLearn = () => {
  const learnItems = [
    {
      id: 1,
      icon: "/social/whatsapp.webp",
      title: "WhatsApp",
    },

    {
      id: 2,
      icon: "/social/upi.webp",
      title: "UPI Payments",
    },

    {
      id: 3,
      icon: "/social/video-call.webp",
      title: "Video Calling",
      orange: true,
    },

    {
      id: 4,
      icon: "/social/youtube.webp",
      title: "YouTube",
    },

    {
      id: 5,
      icon: "/social/facebook.webp",
      title: "Facebook",
    },

    {
      id: 6,
      icon: "/social/government.webp",
      title: "Government Apps",
      orange: true,
    },

    {
      id: 7,
      icon: "/social/forms.webp",
      title: "Online Forms",
      orange: true,
    },

    {
      id: 8,
      icon: "/social/photo.webp",
      title: "Photo Sharing",
      orange: true,
    },

    {
      id: 9,
      icon: "/social/maps.webp",
      title: "Google Maps",
    },

    {
      id: 10,
      icon: "/social/tickets.webp",
      title: "Online Tickets",
      orange: true,
    },
  ];

  return (
    <section
      id="what-seniors-learn"
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
            What Seniors{" "}
            <span className="text-orange-500">
              Can Learn
            </span>
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            mt-12
            items-center
          "
        >
          {/* ICON GRID */}
          <div
            className="
              grid
              grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              gap-5
            "
          >
            {learnItems.map((item) => (
              <div
                key={item.id}
                className="
                  border
                  border-orange-100
                  dark:border-[#2a2a2a]
                  rounded-2xl
                  bg-[#fffaf5]
                  dark:bg-[#181818]
                  h-[120px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-2
                  transition-all
                  duration-300
                  hover:border-orange-500/40
                  hover:shadow-[0_0_20px_rgba(249,115,22,0.08)]
                "
              >
                {/* ICON */}
                <img
                  src={item.icon}
                  alt={item.title}
                  loading="lazy"
                  className={`
                    w-12
                    h-12
                    object-contain
                    ${
                      item.orange
                        ? "dark:brightness-0 dark:invert dark:sepia dark:saturate-[6000%] dark:hue-rotate-[340deg]"
                        : ""
                    }
                  `}
                />

                {/* TITLE */}
                <h3
                  className="
                    text-sm
                    md:text-base
                    font-semibold
                    text-black
                    dark:text-white
                    mt-3
                    leading-5
                  "
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* SIDE IMAGE */}
          <div
            className="
              hidden
              lg:block
              relative
              overflow-hidden
              rounded-3xl
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-white/30
                dark:from-black/20
                via-transparent
                to-transparent
                z-10
              "
            />

            <img
              src="/senior-learning.webp"
              alt="Senior Learning"
              loading="lazy"
              className="
                w-full
                rounded-3xl
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSeniorsLearn;