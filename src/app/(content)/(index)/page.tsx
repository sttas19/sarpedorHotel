import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Page } from "@/lib/types";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { Spacer } from "@/components/ui/spacer";
import { RoomCard } from "@/components/cards/room-card";
import { CateringCard } from "@/components/cards/catering-card";
import { ImageCard } from "@/components/cards/image-card";
import ImageGallery from "@/components/ImageGallery";
import { Link } from "@/components/ui/links";

const HomePage: Page = () => (
  <>
    <Carousel opts={{ align: "start" }} className="pt-8 relative">
      <CarouselContent className="">
        {[
          {
            id: "hotel_1",
            img: "/hotels/_1.png",
          },
          {
            id: "hotel_2",
            img: "/hotels/_2.png",
          },
          {
            id: "hotel_3",
            img: "/hotels/_3.png",
          },
        ].map((card) => (
          <CarouselItem key={card.id}>
            <article className=" w-full">
              <Image
                src={card.img}
                alt="Hotel"
                width={1228}
                height={600}
                className="aspect-[2/1] w-screen max-md:aspect-[1/2]  object-cover "
              />
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>
      <section className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-5 text-center text-white w-full justify-center items-center">
        <h4>Бодрум</h4>
        <h1 className="font-playfair text-[64px] leading-[64px] max-md:text-[40px] max-md:leading-[40px]   uppercase">
          Sarpedor Boutique <br /> Beach Hotel
        </h1>
        <p className="font-cormorant text-xl w-[700px] tracking-wider max-md:hidden">
          Расположенный в великолепной бухте Торба на идиллическом склоне холма,
          этот бутик-отель в Бодруме украшен пленительными ароматными
          бугенвиллиями, соснами и оливковыми деревьями.
        </p>
        <Button
          variant="light"
          className="font-manrope self-center mt-14 max-md:hidden"
        >
          Бронировать
        </Button>
      </section>

      <div className="absolute bottom-10 px-3 w-full md:hidden">
        <Button variant="light" className="font-manrope self-center w-full">
          Бронировать
        </Button>
      </div>
      <CarouselNext className="max-md:hidden" />
      <CarouselPrevious className="max-md:hidden" />
    </Carousel>

    <Spacer y="4xl" />

    <section id="about" className="container ">
      <div className="flex flex-col items-start gap-10 md:flex-row md:gap-20 text-foreground">
        <div className="md:flex-1 text-left">
          <h4>Дорогие гости!</h4>
          <h2 className="font-playfair md:text-[48px] uppercase mt-2 text-3xl leading-[48px]">
            Добро пожаловать
          </h2>
          <p className="font-cormorant text-xl leading-[26px] mt-5">
            Sarpedor Boutique Beach Hotel Bodrum стремится предоставить лучшие
            услуги, уникальную архитектуру и структуру. Великолепный сервис,
            возглавляемый командой ветеранов отрасли, является одним из ключевых
            столпов бренда нашего пляжного отеля. Демонстрация традиционного
            турецкого гостеприимства и адекватное представление его культуры –
            вот суть бренда.
          </p>
        </div>

        <div className="relative md:flex-1 md:h-[500px] h-[300px] w-full">
          <Image
            src="/welcome/_2.png"
            alt="Терраса отеля"
            width={300}
            height={400}
            className="absolute top-0 right-7 md:right-0  w-[224px] md:w-[360px]  object-cover"
          />

          <Image
            src="/welcome/_1.png"
            alt="Фасад отеля"
            width={300}
            height={400}
            className="absolute bottom-0 left-7 md:left-0 w-[163px] md:w-[265px] object-cover"
          />
        </div>
      </div>
    </section>

    <Spacer y="4xl" />

    <section id="rooms" className=" container">
      <div className="flex flex-col gap-10">
        <div className="flex max-md:flex-col items-start justify-between max-md:gap-5 ">
          <div className="flex flex-col flex-1 text-left">
            <h4>Максимальный комфорт</h4>
            <h2 className="font-playfair md:text-[48px] uppercase mt-2 text-3xl leading-[48px]">
              Наши комнаты
            </h2>
          </div>
          <p className="font-cormorant text-xl leading-[26px] max-w-[550px]">
            Откройте для себя роскошь и комфорт в каждом из наших номеров. Будь
            то просторные люксы с захватывающим видом на Эгейское море или
            уютные номера, окружённые зеленью сада, каждая деталь продумана,
            чтобы подарить вам незабываемый отдых. Все номера оборудованы
            современными удобствами, стильным интерьером и эксклюзивными
            услугами, чтобы ваш отдых был безупречным. Расслабьтесь и
            погрузитесь в атмосферу полного уединения и гармонии.
          </p>
        </div>
        <Carousel>
          <CarouselContent className="gap-6">
            {[
              {
                id: "Superior Rooms",
                img: "/room-cards/_1.png",
                title: "Superior Rooms",
                content:
                  "Номера Superior в Sarpedor Boutique Beach Hotel Bodrum площадью 35 м²/377 футов² рассчитаны на размещение до 2 гостей.",
              },
              {
                id: "Superior Rooms Plus",
                img: "/room-cards/_2.png",
                title: "Superior Rooms Plus",
                content:
                  "Номера Superior Plus в Sarpedor Boutique Beach Hotel Bodrum площадью 40 м2/431 фут² рассчитаны на размещение до 3 гостей.",
              },
              {
                id: "Superior Suites",
                img: "/room-cards/_3.png",
                title: "Superior Suites",
                content:
                  "Супериор-люксы отеля Sarpedor Boutique Beach Hotel Bodrum площадью 45 м2/484 фута² рассчитаны на размещение до 2 гостей.",
              },
              {
                id: "Superior Rooms 2",
                img: "/room-cards/_4.png",
                title: "Superior Rooms",
                content:
                  "Номера Junior Suite в бутик-отеле Sarpedor Boutique Beach Hotel Bodrum площадью 85 м²/915 футов² рассчитаны на размещение до 4 гостей.",
              },
              {
                id: "Superior Rooms 3",
                img: "/room-cards/_5.png",
                title: "Superior Rooms",
                content:
                  "Номера Junior Suite в бутик-отеле Sarpedor Boutique Beach Hotel Bodrum площадью 85 м²/915 футов² рассчитаны на размещение до 4 гостей.",
              },
              {
                id: "Superior Rooms 4",
                img: "/room-cards/_6.png",
                title: "Superior Rooms",
                content:
                  "Номера Junior Suite в бутик-отеле Sarpedor Boutique Beach Hotel Bodrum площадью 85 м²/915 футов² рассчитаны на размещение до 4 гостей.",
              },
              {
                id: "Superior Rooms 5",
                img: "/room-cards/_7.png",
                title: "Superior Rooms",
                content:
                  "Номера Junior Suite в бутик-отеле Sarpedor Boutique Beach Hotel Bodrum площадью 85 м²/915 футов² рассчитаны на размещение до 4 гостей.",
              },
              {
                id: "Superior Rooms 6",
                img: "/room-cards/_8.png",
                title: "Superior Rooms",
                content:
                  "Номера Junior Suite в бутик-отеле Sarpedor Boutique Beach Hotel Bodrum площадью 85 м²/915 футов² рассчитаны на размещение до 4 гостей.",
              },
            ].map((item) => (
              <CarouselItem key={item.id}>
                <RoomCard
                  img={item.img}
                  title={item.title}
                  content={item.content}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselControls className="mt-10 md:hidden" />
        </Carousel>
      </div>
    </section>

    <Spacer y="4xl" />

    <section id="other" className="container">
      <div className="flex flex-col gap-10">
        <div className="flex items-start max-md:flex-col justify-between">
          <div className="flex flex-col flex-1 text-left">
            <h4>Для гурманов</h4>
            <h2 className="font-playfair md:text-[48px] uppercase mt-2 text-3xl leading-[48px]">
              Рестораны и бары
            </h2>
          </div>
          <p className="font-cormorant text-xl leading-[26px] max-w-[550px] max-md:mt-5 ">
            Мы предлагаем множество блюд и напитков, которые не оставят вас
            равнодушными. От восхитительных коктейлей у бассейна до команды
            кулинаров, готовых приготовить ваше любимое блюдо, - наш отель
            никогда не перестанет удивлять. В бутик-отеле Sarpedor есть два
            бара, ресторан для закусок и основной ресторан, где каждый найдет
            себе занятие по вкусу.
          </p>
        </div>
        <Carousel className="md:hidden" opts={{ align: "start" }}>
          <CarouselContent className="gap-5">
            {[
              {
                img: "/catering-cards/_1.png",
                title: "Sunset",
                content:
                  "Наш главный ресторан Sunset предлагает гостям и посетителям курорта завтрак и ужин по меню. Насладитесь выбором блюд международной кухни.",

                imageClassName: "h-[200px]",
              },
              {
                img: "/catering-cards/_2.png",
                title: "Винный погреб",
                content:
                  "Это поистине особенное место для ужина в бутик-отеле Sarpedor. Он особенно идеально подходит для пар, желающих провести вечер романтического свидания в Бодруме.",

                imageClassName: "h-[200px]",
              },
              {
                img: "/catering-cards/_3.png",
                title: "Пляжный ресторан",
                content:
                  "Дополнит ваш отдых алкогольными и безалкогольными напитками, захватывающим видом на природный ландшафт и легкими закусками.",

                imageClassName: "h-[200px]",
              },
            ].map((card, index) => (
              <CarouselItem key={index}>
                <CateringCard
                  img={card.img}
                  title={card.title}
                  content={card.content}
                  className="w-[360px]"
                  imageClassName={card.imageClassName}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselControls />
        </Carousel>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 max-md:hidden">
          {[
            {
              img: "/catering-cards/_1.png",
              title: "Sunset",
              content:
                "Наш главный ресторан Sunset предлагает гостям и посетителям курорта завтрак и ужин по меню. Насладитесь выбором блюд международной кухни.",
              className: "row-span-2 grid-rows-[auto_1fr_1fr]",
              imageClassName: "h-[614px] max-md:h-[200px]",
            },
            {
              img: "/catering-cards/_2.png",
              title: "Винный погреб",
              content:
                "Это поистине особенное место для ужина в бутик-отеле Sarpedor. Он особенно идеально подходит для пар, желающих провести вечер романтического свидания в Бодруме.",
              className: "row-span-1 grid-rows-[auto_1fr_1fr]",
              imageClassName: "h-[215px] max-md:h-[200px]",
            },
            {
              img: "/catering-cards/_3.png",
              title: "Пляжный ресторан",
              content:
                "Дополнит ваш отдых алкогольными и безалкогольными напитками, захватывающим видом на природный ландшафт и легкими закусками.",
              className: "row-span-1 grid-rows-[auto_1fr_1fr]",
              imageClassName: "h-[215px] max-md:h-[200px]",
            },
          ].map((card, index) => (
            <CateringCard
              key={index}
              img={card.img}
              title={card.title}
              content={card.content}
              className={card.className}
              imageClassName={card.imageClassName}
            />
          ))}
        </div>
      </div>
    </section>

    <Spacer y="4xl" />

    <section className="container">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-6 text-center">
          <h2 className="font-playfair text-[48px] uppercase mt-2 self-center max-md:text-3xl leading-[48px]">
            Спа
          </h2>
          <p className="font-cormorant text-xl leading-[26px] max-w-[830px] self-center max-md:text-left">
            Мы предлагаем множество блюд и напитков, которые не оставят вас
            равнодушными. От восхитительных коктейлей у бассейна до команды
            кулинаров, готовых приготовить ваше любимое блюдо, - наш отель
            никогда не перестанет удивлять. В бутик-отеле Sarpedor есть два
            бара, ресторан для закусок и основной ресторан, где каждый найдет
            себе занятие по вкусу.
          </p>
        </div>
        <div className="flex max-md:flex-col-reverse justify-between gap-5">
          <div className="flex flex-col flex-1">
            <h4>Что вас ждет:</h4>
            <ul className="font-manrope text-base space-y-6 list-image-[url(/ListStyleImages/_1.png)] mt-8 ml-5 [&>*]:pl-3">
              <li>Традиционные турецкие хаммамы</li>
              <li>Расслабляющие и лечебные массажи</li>
              <li>Индивидуальные программы ухода за лицом и телом</li>
              <li>Паровые комнаты, сауна и джакузи</li>
              <li>Уединенная зона релаксации с видом на Эгейское море</li>
              <li>Ароматерапия с использованием эфирных масел</li>
              <li>Холодные и горячие бассейны для контрастной терапии</li>
            </ul>

            <Button className="mt-24 max-md:mt-10 max-md:self-center font-manrope">
              Подробнее
            </Button>
          </div>

          <Image
            src="/spa/spa.png"
            alt="SPA"
            width={552}
            height={448}
            className=" w-[552px] object-cover"
          />
        </div>
      </div>
    </section>

    <Spacer y="4xl" />

    <section className="container">
      <div className="flex flex-col gap-10">
        <div className="flex items-start justify-between max-md:flex-col ">
          <div className="flex flex-col flex-1 text-left">
            <h4>Эгейское побережье</h4>
            <h2 className="font-playfair text-[48px] uppercase mt-2 max-md:text-3xl leading-[48px]">
              Расположение
            </h2>
          </div>
          <div>
            <p className="font-cormorant text-xl leading-[26px] max-w-[550px] max-md:mt-5">
              Отель Sarpedor расположен в одном из самых живописных уголков
              Эгейского побережья, предлагая гостям уникальное сочетание
              природной красоты, уединения и легкого доступа к ключевым
              достопримечательностям. Окруженный кристально чистыми водами и
              зелеными холмами, отель предоставляет панорамные виды и атмосферу
              абсолютного спокойствия.
            </p>
            <Button className="mt-10 font-manrope">Смотреть на карте</Button>
          </div>
        </div>
        <div className="">
          <ImageGallery images={images} />
        </div>
      </div>
    </section>

    <Spacer y="4xl" />

    <section className="container ">
      <div className="py-12 bg-white">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 text-center">
            <h2 className="font-playfair text-[48px] uppercase mt-2 self-center max-md:text-3xl leading-[48px]">
              Специальное предложение
            </h2>
            <p className="font-cormorant text-xl leading-[26px] max-w-[960px] self-center">
              Наш отель предлагает пакет «Всё включено» , который превратит ваш
              отдых в сказочное путешествие без забот. Погружайтесь в мир
              изысканной кухни, наслаждайтесь неограниченными напитками и
              коктейлями, отдыхайте у бассейна или в спа-центре. Для вас
              доступны занятия спортом, развлекательные программы и
              первоклассный сервис – всё это уже включено, чтобы ваш отпуск был
              по-настоящему незабываемым.
            </p>
          </div>
          <Button className="self-center font-manrope">
            Получить промокод
          </Button>
        </div>
      </div>
    </section>

    <Spacer y="4xl" />

    <section className="container">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-6 text-center">
          <h2 className="font-playfair text-[48px] uppercase mt-2 self-center max-md:text-3xl leading-[48px]">
            Свадьбы
          </h2>
          <p className="font-cormorant text-xl leading-[26px] max-w-[830px] self-center max-md:text-left">
            В Sarpedor каждый свадебный день превращается в волшебную историю
            любви. Наши уникальные локации с потрясающими видами на Эгейское
            море, персонализированный сервис и внимание к каждой детали создадут
            атмосферу, о которой вы мечтали. Будь то интимная церемония на пляже
            или пышный праздник под звездами, мы позаботимся о том, чтобы ваш
            особый день стал незабываемым событием для вас и ваших гостей.
            Подарите себе свадьбу мечты в окружении природной красоты и роскоши!
          </p>
        </div>
        <div className="flex justify-between max-md:flex-col gap-5">
          <Image
            src="/wedding/_1.png"
            alt="Wedding"
            width={552}
            height={448}
            className=" w-[552px] object-cover"
          />
          <div className="flex flex-col flex-1">
            <h4>Что вас ждет:</h4>
            <ul className="font-manrope text-base space-y-6 list-image-[url(/ListStyleImages/_1.png)] mt-4 ml-5 [&>*]:pl-3">
              <li>Специальное свадебное меню</li>
              <li>Специальный свадебный торт от нашего шеф-повара</li>
              <li>Коктейль на закате у бассейна перед свадебной церемонией</li>
              <li>Организация салона красоты</li>
              <li>Специальный фотоальбом</li>
              <li>Диджей, живая музыка, развлечения и многое другое</li>
            </ul>

            <Button className="mt-24 font-manrope max-md:mt-10 max-md:self-center">
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </section>

    <Spacer y="4xl" />

    <section className=" container">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-6 text-center">
          <h2 className="font-playfair text-[48px] uppercase mt-2 self-center max-md:text-3xl leading-[48px]">
            Всё включено
          </h2>
          <p className="font-cormorant text-xl leading-[26px] max-w-[830px] self-center max-md:text-left">
            С пакетом «Всё включено» от Sarpedor каждая минута вашего отдыха
            будет наполнена комфортом и наслаждением. Еда и напитки на любой
            вкус, расслабляющие процедуры, развлекательные шоу и активный отдых
            – всё это входит в стоимость вашего пребывания. Позвольте себе
            полный релакс в роскошной атмосфере на берегу Эгейского моря, где
            каждый момент создан для вашего удовольствия!
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-5 max-md:flex max-md:flex-col">
          <ImageCard title="Питание" img="/all-inclusive/_1.png" />
          <ImageCard title="Бары" img="/all-inclusive/_2.png" />
          <ImageCard title="Развлечения" img="/all-inclusive/_3.png" />
          <ImageCard title="Медовый месяц" img="/all-inclusive/_4.png" />
          <ImageCard
            title="Прочие услуги"
            img="/all-inclusive/_5.png"
            className="col-span-2"
          />
        </div>
      </div>
    </section>

    <Spacer y="4xl" />

    <section id="contacts" className="container pb-36">
      <div className="p-12 max-md:p-4 bg-white flex flex-col gap-8">
        <div className="bg-[#282828] flex flex-col gap-6 text-center text-white p-10">
          <h2 className="font-playfair text-[48px] uppercase mt-2 self-center max-md:text-3xl leading-[48px]">
            Свяжитесь с нами
          </h2>
          <p className="font-cormorant text-xl leading-[26px] max-w-[830px] self-center">
            Если у вас возникли вопросы о бронировании, услугах отеля или особых
            предложениях, свяжитесь с нами удобным для вас способом. Наша
            команда сделает всё возможное, чтобы ваше пребывание было комфортным
            и приятным.
          </p>
        </div>
        <form className="flex flex-col w-[552px] max-md:w-full self-center ">
          <label className="my-3">
            Имя и фамилия
            <input type="text" className="border border-dark w-full h-10" />
          </label>
          <label className="my-3">
            Номер телефона / E-mail
            <input type="email" className="border border-dark w-full h-10" />
          </label>

          <Button className="font-manrope self-center mt-4">Отправить</Button>

          <p className="min-w-0 max-w-fit select-none font-manrope text-base text-[#535353] text-center mt-5">
            Нажимая на кнопку, вы соглашаетесь на обработку&nbsp;
            <Link
              className="w-fit cursor-pointer font-manrope text-base text-black font-medium"
              href=""
            >
              персональных данных
            </Link>
          </p>
        </form>
      </div>
    </section>
  </>
);

export default HomePage;

const images = [
  { id: 1, src: "/gallery/_1.png" },
  { id: 2, src: "/gallery/_2.png" },
  { id: 3, src: "/gallery/_3.png" },
  { id: 4, src: "/gallery/_4.png" },
];
