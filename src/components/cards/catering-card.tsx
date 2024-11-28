import { StyleProps } from "@/lib/types";
import { Image } from "../ui/image";
import { cn } from "@/utils";

type CateringCardType = StyleProps & {
  img: string;
  title: string;
  content: string;
  imageClassName: string;
};

const CateringCard = ({
  img,
  title,
  content,
  className,
  imageClassName,
}: CateringCardType) => (
  <article
    className={cn("flex flex-col border border-[#BFBFBF] h-full", className)}
  >
    <Image
      src={img}
      alt=""
      height={614}
      width={552}
      className={cn("md:w-[552px] object-cover", imageClassName)}
    />

    <div className="flex flex-col gap-4 text-left p-5">
      <h4 className="font-playfairdisplay text-2xl">{title}</h4>
      <p className="font-cormorant text-xl leading-[26px]">{content}</p>
    </div>
  </article>
);

export { CateringCard };
