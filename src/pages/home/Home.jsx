import React from "react";
import Hero from "../../components/Hero";
import "./home.css";
import Homebox from "../../components/Homebox";
import HomeStickers from "../../components/HomeStickers";
import { useTranslation } from "react-i18next";
import IndexRooms from "../../components/IndexRooms";
import Footer from "../../components/Footer";

const Home = () => {
  const [t] = useTranslation();

  return (
    <>
      <Hero />
      <article className="description-index adjust">
        <div className="boxes adjust">
          <h2
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            {t("about-us")}
          </h2>
        </div>
        <div className="boxes adjust">
          <p
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            {t("about-info")}
          </p>
        </div>
      </article>
      <Homebox />
      <IndexRooms
        t={t}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        data-aos-offset="0"
      />
      <section className="attachment-index">
        <div>
          <h8>Explore. Wander. Disapper.</h8>
          <h4>The Great Escape</h4>
          <h4>You'll Remember</h4>
        </div>
      </section>
      <HomeStickers
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        data-aos-offset="1000"
      />
      <Footer />
    </>
  );
};

export default Home;
