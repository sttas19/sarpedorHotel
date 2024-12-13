import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { XIcon } from "../ui/icons/x-icon";
import { Image } from "../ui/image";
const Header = () => (
  <header className=" flex h-20 w-full items-center bg-white relative">
    <div className="container flex items-center">
      <div className="flex flex-1 items-center first-of-type:justify-start last-of-type:justify-end">
        <Image
          src="/logo/logo.png"
          alt="logo"
          width={96}
          height={80}
          className="aspect-[3/1] h-16 w-24 object-contain"
        />
      </div>

      <div className="flex flex-1 items-center first-of-type:justify-start last-of-type:justify-end">
        <ul className="ml-auto flex items-center max-md:hidden ">
          {[
            navigation.about,
            navigation.rooms,
            navigation.other,
            navigation.contacts,
          ].map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="block px-7 font-manrope text-base leading-4 text-black"
              >
                <span className="text-nowrap">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-1 items-center first-of-type:justify-start last-of-type:justify-end">
        <Button className="w-40 font-manrope max-md:hidden">Бронировать</Button>
        <div className="md:hidden">
          <Dialog>
            <DialogTrigger>
              <MenuIcon className="w-10 h-10" />
            </DialogTrigger>
            <DialogContent className="bg-[#2D2D2D] p-6 ">
              <DialogTitle></DialogTitle>
              <DialogClose>
                <XIcon
                  className="h-7 w-7 absolute top-5 right-5 "
                  style={{ color: "white" }}
                />
              </DialogClose>
              <div className="w-full flex flex-col gap-5 items-center justify-center">
                <ul>
                  {[
                    navigation.about,
                    navigation.rooms,
                    navigation.other,
                    navigation.contacts,
                  ].map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="block  font-manrope text-2xl leading-4 py-5 text-white text-center"
                      >
                        <span className="text-nowrap">{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <Button variant="light" className="w-40 font-manrope">
                  Бронировать
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  </header>
);

export { Header };

type HotelLink = {
  id: string;
  href: string;
  title: string;
};

const navigation = {
  about: {
    id: "about",
    href: "#about",
    title: "О нас",
  },
  rooms: {
    id: "rooms",
    href: "#rooms",
    title: "Комнаты",
  },
  other: {
    id: "other",
    href: "#other",
    title: "Другое",
  },
  contacts: {
    id: "contatcs",
    href: "#contacts",
    title: "Контакты",
  },
} satisfies Record<string, HotelLink>;
