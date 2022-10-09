/** @format */

export const cursorAnimation = (largecircle, smallcircle, scaling) => {
  return {
    large: {
      show: {
        x: largecircle.x - 32,
        y: largecircle.y - 32,
        // opacity: scaling ? 0.2 : 0.2,
        transition: { type: "spring", mass: 3 },
      },
    },
    small: {
      show: {
        x: smallcircle.x - 8,
        y: smallcircle.y - 8,
        transition: { type: "spring", mass: 2 },
      },
    },
  };
};
export const headerAnimation = () => {
  return {
    menu: {
      hidden: { width: "40px", height: "40px", borderRadius: "50%" },
      show: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        transition: { delayChildren: 1 },
      },
      hide: { width: "40px", height: "40px", borderRadius: "50%" },
    },
    search: {
      hidden: { scale: 0 },
      show: {
        scale: 1,
        transition: { duration: 0.5, delay: 0.5 },
      },
    },
  };
};
