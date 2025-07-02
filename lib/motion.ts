export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export function slideInFromBottom(delay: number) {
  return {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
}

export function scaleIn(delay: number) {
  return {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };
}

export function fadeIn(delay: number) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
}

export const staggerContainer = (staggerChildren?: number, delayChildren?: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerChildren || 0.1,
      delayChildren: delayChildren || 0,
    },
  },
});

export const textVariant = (delay?: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: delay || 0,
    },
  },
});
