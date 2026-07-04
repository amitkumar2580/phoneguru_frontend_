export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
    },
  },
};

export const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren:
        0.12,
    },
  },
};

export const scaleHover = {
  whileHover: {
    scale: 1.02,
  },

  whileTap: {
    scale: 0.98,
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.4,
    },
  },
};