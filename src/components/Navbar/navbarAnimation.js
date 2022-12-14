const animate = {
  menuVariants: {
    opened: {
      height: "35vh",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      height: 0,
      transition: {
        when: "afterChildren",
      },
    },
  },
  linkVariants: {
    opened: {
      opacity: 1,
      y: 5,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  },
};

export default animate;
