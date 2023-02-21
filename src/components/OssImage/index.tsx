/* eslint-disable react/require-default-props */
import { useOSS } from "@/hooks/useOss";

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  notSupportWebpWidth?: number;
  notSupportWebpHeight?: number;
  ossWidth?: number;
  ossHeight?: number;
};

export default function (props: Props) {
  const { getOssImage } = useOSS();
  return (
    <img
      {...props}
      src={getOssImage({
        originUrl: props.src || "",
        notSupportWebpWidth: props.notSupportWebpWidth,
        notSupportWebpHeight: props.notSupportWebpHeight,
        width: props.ossWidth,
        height: props.ossHeight,
      })}
      loading="lazy"
    />
  );
}
