import { Separator } from "./ui/separator";
import Image from "next/image";

const Footer = () => (
  <footer className="bg-[#2D2D2D]">
    <div className="pt-16 max-md:p-4 px-20 pb-8">
      <div className=" flex flex-col gap-10 justify-center items-center">
        <h1 className="font-playfair text-[48px] leading-[48px] text-center text-[#909090] md:max-w-[810px] max-w-[320px] uppercase max-md:text-3xl">
          Sarpedor Boutique Beach Hotel Bodrum
        </h1>

        <section className="flex justify-between  max-md:flex-col w-full max-md:gap-10">
          <FooterSection
            title="Содержание"
            items={[
              "Добро пожаловать",
              "Наши комнаты",
              "Рестораны и бары",
              "Спа",
              "Расположение",
              "Спец. предложение",
              "Свадьбы",
              "Контакты",
            ]}
          />

          <FooterSection
            title="Контакты"
            items={[
              "info@sarpedor.com",
              "+90-123-456-7890",
              "Torba Mahallesi Herodot Bulvari",
              "No:9 Bodrum 48400/Торба",
            ]}
          />

          <FooterSection
            title="Другое"
            items={[
              "Политика конфиденциальности",
              "Условия отмены бронирования",
            ]}
          />
        </section>
      </div>
      <Separator className="bg-[#909090] my-4  md:my-8" />

      <section className="flex max-md:flex-col-reverse justify-between w-full">
        <p className="text-[#909090] text-base font-manrope text-center">
          {" "}
          © {getCurrentYear()} Sarpedor Boutique Hotel. Все права защищены.
        </p>

        <Separator className="bg-[#909090] md:hidden my-4" />

        <div className="flex items-center justify-center gap-x-5">
          {[
            {
              name: "facebook",
              img: "/socials/facebook.png",
              href: "/",
            },
            {
              name: "x",
              img: "/socials/x.png",
              href: "/",
            },
            {
              name: "instagram",
              img: "/socials/instagram.png",
              href: "/",
            },
            {
              name: "youtube",
              img: "/socials/youtube.png",
              href: "/",
            },
            {
              name: "pinterest",
              img: "/socials/pinterest.png",
              href: "/",
            },
          ].map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="w-10 h-10 border rounded-full p-1 flex justify-center items-center"
            >
              <Image
                alt={item.name}
                src={item.img}
                width={24}
                height={24}
                className="h-auto w-6"
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  </footer>
);

export { Footer };

type FooterSectionProps = {
  title: string;
  items: string[];
};

const FooterSection = ({ title, items }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="font-manrope text-white text-xl md:mb-8 mb-6">{title}</h3>
      <ul className="grid grid-rows-4 gap-y-4 gap-x-10 grid-flow-col ">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-base leading-4 text-white font-manrope font-normal max-w-[250px] "
          >
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getCurrentYear = () => new Date(Date.now()).getFullYear();
