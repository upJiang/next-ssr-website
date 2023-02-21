import { useCallback } from "react";

import { useWebp } from "./useWebp";

export const useOSS = () => {
  const { isSupportWebp } = useWebp();
  const getOssImage = useCallback(
    (option: {
      originUrl: string;
      /**
       * @description 不支持 webp，降级处理宽度
       * @type {number}
       */
      notSupportWebpWidth?: number;
      /**
       * @description 不支持 webp，降级处理高度
       * @type {number}
       */
      notSupportWebpHeight?: number;
      width?: number; // 不使用 oss，正常传即可
      height?: number;
    }) => {
      let process = "";
      if ((option.notSupportWebpWidth && !isSupportWebp) || option.width) {
        process = `w_${option.notSupportWebpWidth || option.width},`;
      }
      if ((option.notSupportWebpHeight && !isSupportWebp) || option.height) {
        process = `${process}h_${
          option.notSupportWebpHeight || option.height
        },`;
      }
      if (process) {
        process = `x-oss-process=image/resize,m_fill,limit_0,${process},`;
      }

      if (isSupportWebp && process) {
        process = `${process}/format,webp`;
      }
      if (isSupportWebp && !process) {
        process = `x-oss-process=image/format,webp`;
      }
      return `${option.originUrl}?${process}`;
    },
    [isSupportWebp],
  );

  return { getOssImage };
};
