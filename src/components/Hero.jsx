import React from "react";
import { useTranslation } from "react-i18next";
import "./hero.css";

const Hero = () => {
  const [t] = useTranslation();
  return (
    <>
      <div className="hero-container ">
        <div className="hero-opacity">
          <h3>{t("hero")}</h3>
          <h1>HOTEL CRYSTAL</h1>
          <button className="button">{t("hero-button")}</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
