import { StyleProps } from "@/lib/types";
import { Image } from "../ui/image";
import { Link } from "../ui/links";

type RoomCardType = StyleProps & {
  img: string;
  title: string;
  content: string;
};

const RoomCard = ({ img, title, content }: RoomCardType) => (
  <article className="flex flex-col w-full gap-6 max-md:ml-4">
    <Image
      src={img}
      alt="Hotel Room"
      height={250}
      width={360}
      className="w-[360px] object-cover h-[250px]"
    />

    <div className="flex flex-col gap-5">
      <h4 className="font-playfair text-2xl">{title}</h4>
      <p className="font-cormorant text-xl max-w-[280px]">{content}</p>

      <Link href={""} className="text-base">
        Читать больше
      </Link>
    </div>
  </article>
);

export { RoomCard };
