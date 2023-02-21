import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";

export const useDevice = () => {
  const [isMobile, setMobile] = useState(true);
  const size = useWindowSize();

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile =
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        userAgent,
      );
    setMobile(size.width <= 750 || mobile);
  }, [size.width]);

  return {
    isMobile,
  };
};
