import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollFixer() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === "#comprar") {
      window.scrollTo({
        top: 150,
        left: 0,
        behavior: "auto",
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
    // eslint-disable-next-line
  }, [pathname]);

  return null;
}
