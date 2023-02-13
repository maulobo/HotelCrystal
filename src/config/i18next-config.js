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
          home: "Inicio",
          rooms: "Habitaciones y servicios",
          contact: "Contacto",
          parking: "Estacionamiento",
          "parking-desc":
            "Para brindar mayor seguridad y comodidad, contamos con playa de estacionamiento",
          breakfast: "Desayuno",
          "breakfast-desc":
            "El hotel cuenta un servicios de desayuno para todos los huespedes en el horario de 7am - 10am",
          wifi: "Hotel Crystal posee conectividad de wifi en todo el hotel para mejorar tu experiencia como hueped",
          drinks: "Bebidas",
          "drinks-desc":
            "Contamos con un servicio de bebidas con y sin alcohol que podrás solicitar con un monto adicional",
          SimpleRoom: "Habitacion simple",
          DoubleRoom: "Habitacion doble",
          TripleRoom: "Habitacion triple",
          Superior: "Habitacion Cuadruple",
          hero: "Un espacio diseñado para vos",
          "hero-button": "HABITACIONES",
          "about-us": "Sobre Nosotros",
          "about-info":
            "Somos una empresa de servicios de alojamiento ubicada en el centro comercial de la Ciudad de Neuquén, a sólo 2 cuadrasde la Ruta Nacional 22. Tras años de experiencia en el rubro, contamos con una cartera de clientes compuesta por huéspedes particulares y empresas de la región. Nuestro objetivo es configurarnos como un hotel 2 estrellas reconocido en la ciudad mediante el ofrecimiento de un servicio de calidad a nuestros clientes",
          "our-hotel": "NUESTRO HOTEL",
          "our-hotel-info":
            "CrystalHotel está conformado por habitaciones de tipo estándar y superior con baño privado, TV Led, WiFi y aire acondicionado. Asimismo, cuenta con cochera ubicada a 80 mts de distancia. El servicio de alojamiento incluye desayuno.",
          "our-hotel-button": "Mas Info",
          "room-description-1":
            "Cuenta con dos camas individuales o una cama matrimonial. Las mismas poseen con su juego de sábanas y un cubrecama. También está a disposición una frazada, que se puede encontrar en el armario o ya puesta en la cama dependiendo del clima. Las habitaciones vienen equipadas con un baño con ducha.",
          "room-description-2":
            "Cuentan con una cama individual de medidas estándar. Las mismas poseen un juego de sábanas y un cubrecama. Está a disposición del huésped el juego de cama correspondiente y un juego de toallas por persona. Las habitaciones vienen equipadas con un baño y ducha.",
          "room-description-3":
            "cuentan con tres camas individuales o una cama matrimonial y una cama individual. Las mismas poseen un juego de sábanas y un cubrecama. Está a disposición del huésped el juego de cama correspondiente y un juego de toallas por persona. Las habitaciones vienen equipadas con un baño y ducha.",
          "room-description-4":
            "Cuentan con tres camas individuales o una cama matrimonial y una cama individual. Las mismas poseen un juego de sábanas y un cubrecama. Está a disposición del huésped el juego de cama correspondiente y un juego de toallas por persona. Las habitaciones vienen equipadas con un baño y ducha.",
          "room-indexh6": "CONOCE TODAS",
          "room-indexh3": "NUESTRAS HABITACIONES",
          "contact-h4":
            "Estamos a disposición para responder todas tus consultas",
          name: "Nombre",
          lastName: "Apellido",
          Phone: "Numero de telefono",
          email: "Email",
          message: "Mensaje",
          send: "Enviar",
          hoursNsrv: "Horarios y servicios",
          all: "Todos los dias",
          schedule: "Horarios",
          vacations: "Las vacaciones son",
          inspired: "Incentivos inspiradores",
          formHabitaciones: {
            name: "Nombre",
            lastName: "Apellido",
            huespedes: "Huéspedes",
            number: "Número Telefónico",
            mail: "Correo",
            in: "Fecha de ingreso",
            on: "Fecha de egreso (Opcional)",
            data: "Datos adicionales (Opcional)",
            enviarBtn: "Enviar",
            parrafoForm:
              "Recuerde completar todos los campos, a excepción de datos adicionales si no se lo requiere.",
            totlemnjSend: "Datos enviados correctamente",
            mnsjEnviado:
              "Gracias por su reserva, en breve nos comunicaremos con usted por mail verificando los datos, recuerde revisar su casilla de email Inbox o spam.",
          },
          errorForm: {
            nameError: "Recuerde completar con su nombre.",
            lastnameError: "Recuerde completar con su apellido.",
            numberError: "Ingrese su número telefónico.",
            numberErrorII: "Ejemplo: código de área-número, 299-292929",
            emailError: "Ingresa correctamente los datos.",
            emailErrorData: "ejemplo@dominio.com",
            dateinError: "Debe seleccionar una fecha de ingreso.",
          },
        },
      },
      en: {
        translation: {
          home: "Home",
          rooms: "Rooms & Services",
          contact: "Contact",
          parking: "Parking",
          breakfast: "Breakfast",
          "parking-desc":
            "To provide greater security and comfort, we have a private parking",
          "breakfast-desc":
            "The hotel has a breakfast service for all our guests btween 7am - 10am",
          wifi: "Hotel Crystal has Wi-Fi connectivity throughout the hotel to improve your experience as a guest",
          drinks: "Drinks",
          "drinks-desc":
            "We have a service of drinks with and without alcohol that you can request with an additional amount",
          SimpleRoom: "Simple room",
          DoubleRoom: "Double room",
          TripleRoom: "Triple room",
          Superior: "Quadruple room",
          hero: "A space designed for you",
          "hero-button": "ROOMS",
          "about-us": "About us",
          "about-info":
            "We are a service companty accommodation, located in the center from the city of Neuquen, only two blocks away from National Route 22. After years of experience in the field, we have a lot of Privates clients and guest of companies over the region. Our main goal is to be recognized as a 2-star hotel that offers quality service to our costomers",
          "our-hotel": "OUR HOTEL",
          "our-hotel-info":
            "CrystalHotel is made up of standard and superior rooms with private bathroom, Led TV, WiFi and air conditioning. It also has a garage located 80 meters away. The accommodation service includes breakfast",
          "our-hotel-button": "More Info",
          "room-description-1":
            "It has two single beds or one double bed. They have their set of sheets and a bedspread. A blanket is also available, which can be found in the closet or already put on the bed depending on the weather. The rooms come equipped with a bathroom with a shower.",
          "room-description-2":
            "They have a single bed of standard measures. They have a set of sheets and a bedspread. The corresponding set of bedding and a set of towels per person are available to the guest. The rooms come equipped with a bath and shower.",
          "room-description-3":
            "They have three single beds or one double bed and one single bed. They have a set of sheets and a bedspread. The corresponding set of bedding and a set of towels per person are available to the guest. The rooms come equipped with a bathroom and shower",
          "room-description-4":
            "They have three single beds or one double bed and one single bed. They have a set of sheets and a bedspread. The corresponding set of bedding and a set of towels per person are available to the guest. The rooms come equipped with a bath and shower.",
          "room-indexh6": "KNOW ALL",
          "room-indexh3": "OUR ROOMS",
          "contact-h4": "We are available to answer all your questions",
          name: "Name",
          lastName: "Last name",
          Phone: "Phone number",
          email: "Email",
          message: "Message",
          send: "Send",
          hoursNsrv: "Hours and services",
          all: "All days",
          schedule: "Schedule",
          vacations: "Vacations are",
          inspired: "INSPIRED INCENTIVES",
          formHabitaciones: {
            name: "Name",
            lastName: "Surname",
            huespedes: "Guests",
            number: "Phone number",
            mail: "Email",
            in: "Check-in date",
            on: "Check-out date (Optional)",
            data: "Additional data (Optional)",
            enviarBtn: "Send",
            parrafoForm:
              "Remember to complete all the fields, except for additional data if it is not required.",
            totlemnjSend: "Data sent successfully",
            mnsjEnviado:
              "Thank you for your reservation, shortly we will contact you by email verifying the data, remember to check your email Inbox or spam box.",
          },
          errorForm: {
            nameError: "Remember to fill in your name.",
            lastnameError: "Remember to fill in your surname.",
            numberError: "Enter your phone number.",
            numberErrorII: "Example: area code-number, 299-292929",
            emailError: "Enter the data correctly.",
            emailErrorData: "example@domain.com",
            dateinError: "You must select a date of entry.",
          },
        },
      },
    },
  });
