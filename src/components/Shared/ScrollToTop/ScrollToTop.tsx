import { useLayoutEffect } from "react";
import * as React from "react";
import { useLocation } from "react-router-dom";
import { useScrollTo } from "react-use-window-scroll";

type Props = {
  children?: React.ReactNode;
};

const ScrollToTop: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  let scrollTo = useScrollTo();
  useLayoutEffect(() => {
    scrollTo(0, 0);
  }, [pathname, scrollTo]);
  console.log(pathname);

  return <>{children}</>;
};

export default ScrollToTop;
