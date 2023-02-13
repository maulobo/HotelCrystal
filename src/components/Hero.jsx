import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  const [t] = useTranslation();
  return (
    <>
      <header className="hero-container ">
        <div className="hero-opacity">
          <div className="hero-info">
            <p className="subtitle-hero">{t("hero")}</p>
            <h1 className="title-hero">HOTEL CRYSTAL</h1>
            <Link to="/servicios" className="buttonHero">
              {t("hero-button")}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
