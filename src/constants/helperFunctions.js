import {isMobile} from "react-device-detect";

const isMobileSized = (width) => isMobile || width < 700;

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const determineScreenState = (width) => {
  if (width > 1500) {
    return "wide";
  } else if (width > 1200) {
    return "full";
  } else if (width > 900) {
    return "pacman";
  } else if (width > 700) {
    return "half";
  }
  return "mobile";
}

export {
  isMobileSized,
  scrollToTop,
  determineScreenState
};
