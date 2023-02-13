import React from "react";
import Hero from "../../components/Hero";
import "./home.css";
import Homebox from "../../components/Homebox";
import HomeStickers from "../../components/HomeStickers";
import { useTranslation } from "react-i18next";
import IndexRooms from "../../components/IndexRooms";
import Footer from "../../components/Footer";
import IndexInfo from "../../components/IndexInfo";
import { Fade } from "react-awesome-reveal";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BtnWts } from "../../components/BtnWts";

const Home = () => {
  const [t] = useTranslation();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Hotel Crystal</title>
          <meta
            name="author"
            content="Lobo Mauro Andrés, de Prado Valeria Anabel"
          />
          <meta
            name="description"
            content="En el Hotel Crystal ofrecemos a los huéspedes, un espacio de descanso, confort y excelente nivel de servicio, el mismo esta bicado en pleno centro de la Ciudad de Neuquén"
          />
          <meta
            name="keywords"
            content="Hotel Crystal, Neuquén, capital, habitaciones, servicios, desayuno, sala de conferencias, vacaciones"
          ></meta>
        </Helmet>
      </HelmetProvider>
      <Fade cascade damping={0.1}>
        <Hero />
      </Fade>
      <main>
        <IndexInfo />
        <BtnWts />
        <Homebox />
        <IndexRooms t={t} />
        <section className="attachment-index">
          <div className="attachment-info"></div>
        </section>

        <HomeStickers />

        <div className="map-index">
          <h4>Estamos en Av Olascoaga 268, Neuquen</h4>
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.5119842363233!2d-68.06093468464792!3d-38.95797587956132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a34a9cb8dea9b%3A0xcc9bddd5fd58bbe9!2sCRYSTAL%20SRL!5e0!3m2!1ses-419!2sar!4v1674239418887!5m2!1ses-419!2sar"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
