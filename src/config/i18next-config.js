import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    resources: {
      es: {
        translation: {
          hero: "Un espacio diseñado para vos",
          "hero-button": "HABITACIONES",
          "about-us": "Sobre Nosotros",
          "about-info":
            "Somos una empresa de servicios de alojamiento ubicada en el centro comercial de la Ciudad de Neuquén, a sólo 2 cuadrasde la Ruta Nacional 22. Tras años de experiencia en el rubro, contamos con una cartera de clientes compuesta por huéspedes particulares y empresas de la región. Nuestro objetivo es configurarnos como un hotel 2 estrellas reconocido en la ciudad mediante el ofrecimiento de un servicio de calidad a nuestros clientes",
          "our-hotel": "NUESTRO HOTEL",
          "our-hotel-info":
            "CrystalHotel está conformado por habitaciones de tipo estándar y superior con baño privado, TV Led, WiFi y aire acondicionado. Asimismo, cuenta con cochera ubicada a 80 mts de distancia. El servicio de alojamiento incluye desayuno.",
          "our-hotel-button": "Mas Info",
          titulito1: "tarjeta1",
          titulito2: "tarjeta2",
          titulito3: "tarjeta3",
        },
      },
      en: {
        translation: {
          hero: "A space designed for you",
          "hero-button": "ROOMS",
          "about-us": "About us",
          "about-info":
            "We are a service companty accommodation, located in the center from the city of Neuquen, only two blocks away from National Route 22. After years of experience in the field, we have a lot of Privates clients and guest of companies over the region. Our main goal is to be recognized as a 2-star hotel that offers quality service to our costomers",
          "our-hotel": "OUR HOTEL",
          "our-hotel-info":
            "CrystalHotel is made up of standard and superior rooms with private bathroom, Led TV, WiFi and air conditioning. It also has a garage located 80 meters away. The accommodation service includes breakfast",
          "our-hotel-button": "More Info",
          titulito1: "card1",
          titulito2: "card2",
          titulito3: "card3",
        },
      },
    },
  });
