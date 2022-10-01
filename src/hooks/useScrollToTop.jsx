import { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

export const useScrollToTop = (props) => {
  const pageYOffset = props.pageYOffset || 400;
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > pageYOffset) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= pageYOffset) {
      setShowScroll(false);
    }
  }, [pageYOffset, showScroll]);

  const scrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop]);

  return {
    showScroll,
    scrollTop,
  };
};

useScrollToTop.defaultProps = {
  pageYOffset: 200,
  showScroll: false,
};

useScrollToTop.propTypes = {
  pageYOffset: PropTypes.number,
  showScroll: PropTypes.bool,
};

// https://github.com/haingocvu/use-scroll-to-top/blob/main/src/useScrollToTop.ts
