import { cn } from "@/utils";

type ImageProps = Omit<React.ComponentProps<"img">, "alt"> & {
  alt?: string;
};

const Image = ({
  style,
  className,
  src = "",
  alt = "",
  width = 1000,
  height = 1000,
  ...props
}: ImageProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    {...props}
    src={src}
    alt={alt}
    width={width}
    style={style}
    height={height}
    className={cn("h-auto w-full select-none object-cover", className)}
  />
);

export { Image };
