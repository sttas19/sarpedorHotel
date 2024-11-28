import { StyleProps } from "@/lib/types";
import { cn } from "@/utils";
import { Image } from "../ui/image";

type ImageCardProps = StyleProps & {
  title: string;
  img: string;
};

const ImageCard = ({ title, img, className }: ImageCardProps) => (
  <article className={cn("relative", className)}>
    <Image
      src={img}
      alt="Hotel"
      width={552}
      height={350}
      className="w-full h-[350px]  object-cover brightness-50"
    />
    <div className="absolute top-[40%]  text-center text-white w-full z-10">
      <h1 className="font-playfair text-[40px] leading-[64px] uppercase">
        {title}
      </h1>
    </div>
  </article>
);

export { ImageCard };
