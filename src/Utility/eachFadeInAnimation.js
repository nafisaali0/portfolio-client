const eachFadeInAnimation = {
  initial: { opacity: 0, y: 40 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
      duration: 2,
      ease: "easeOut",
    },
  }),
};

export default eachFadeInAnimation;