import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const WhyPhoneGuru = () => {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const images = [
    {
      id: 1,
      image: "/why-phone/why1.webp",
      title:
        "Staying Close to Family",
      desc:
        "They missed their grandchild’s smile because they didn’t know how to video call. A volunteer helped them. Now they connect every day.",
    },

    {
      id: 2,
      image: "/why-phone/why2.webp",
      title:
        "Documents Made Easy",
      desc:
        "An important admission PDF was difficult to open. A nearby tutor taught him and saved the day.",
    },

    {
      id: 3,
      image: "/why-phone/why3.webp",
      title:
        "Independent & Confident",
      desc:
        "She learned UPI payments and now does everything on her own—safe, simple and with confidence.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev ===
      images.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );
  };

  return (
    <section
      id="why-phone-guru"
      className="
        w-full
        bg-white
        dark:bg-[#0f0f0f]
        py-14
        px-5
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
            y: 25,
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
            Why does{" "}
            <span className="text-orange-500">
              Phone Guru
            </span>{" "}
            matter?
          </h2>

          <p
            className="
              text-gray-500
              dark:text-gray-400
              text-base
              md:text-lg
              mt-3
            "
          >
            Technology should
            connect generations,
            not isolate them.
          </p>
        </motion.div>

        {/* DESKTOP */}
        <div
          className="
            hidden
            lg:grid
            grid-cols-3
            gap-8
            mt-14
          "
        >
          {images.map((item) => (
            <div
              key={item.id}
              className="
                rounded-3xl
                overflow-hidden
                border
                border-orange-100
                dark:border-[#2a2a2a]
                bg-white
                dark:bg-[#181818]
                transition-all
                duration-300
                hover:border-orange-500/40
                hover:shadow-[0_0_20px_rgba(249,115,22,0.08)]
              "
            >
              <div
                className="
                  w-full
                  h-[220px]
                  overflow-hidden
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>

              <div className="p-5">
                <h3
                  className="
                    text-orange-500
                    text-xl
                    font-bold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-gray-600
                    dark:text-gray-400
                    leading-7
                    mt-3
                    text-sm
                    md:text-base
                  "
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE */}
        <div className="lg:hidden relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -30,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                rounded-3xl
                overflow-hidden
                border
                border-orange-100
                dark:border-[#2a2a2a]
                bg-white
                dark:bg-[#181818]
                hover:border-orange-500/40
                hover:shadow-[0_0_20px_rgba(249,115,22,0.08)]
              "
            >
              <div
                className="
                  w-full
                  h-[220px]
                  overflow-hidden
                "
              >
                <img
                  src={
                    images[
                      currentIndex
                    ].image
                  }
                  alt={
                    images[
                      currentIndex
                    ].title
                  }
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>

              <div className="p-5">
                <h3
                  className="
                    text-orange-500
                    text-xl
                    font-bold
                  "
                >
                  {
                    images[
                      currentIndex
                    ].title
                  }
                </h3>

                <p
                  className="
                    text-gray-600
                    dark:text-gray-400
                    leading-7
                    mt-3
                    text-sm
                  "
                >
                  {
                    images[
                      currentIndex
                    ].desc
                  }
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="
              absolute
              top-1/2
              -left-4
              -translate-y-1/2
              bg-orange-500
              text-white
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              shadow-lg
            "
          >
            <ArrowBackIosNewIcon
              sx={{
                fontSize: 18,
              }}
            />
          </button>

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="
              absolute
              top-1/2
              -right-4
              -translate-y-1/2
              bg-orange-500
              text-white
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              shadow-lg
            "
          >
            <ArrowForwardIosIcon
              sx={{
                fontSize: 18,
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyPhoneGuru;