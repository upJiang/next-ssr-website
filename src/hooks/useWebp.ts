import { useEffect, useState } from "react";

export const useWebp = () => {
  const [isSupportWebp, setIsSupportWebp] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const supportWebp =
        window.document
          .createElement("canvas")
          .toDataURL("image/webp")
          .indexOf("data:image/webp") > -1;
      setIsSupportWebp(supportWebp);
    }
  }, []);

  return {
    isSupportWebp,
  };
};
