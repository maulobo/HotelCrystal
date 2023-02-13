import React from "react";
import "./homeStickers.css";
import { GiHomeGarage } from "react-icons/gi";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";

const HomeStickers = () => {
  const [t] = useTranslation();
  return (
    <div
      className="homesticker_container"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div>
        <h6>{t("vacations")} </h6>
      </div>
      <div>
        <h3>{t("inspired")}</h3>
      </div>
      <div className="homeSticker_box_container">
        <Slide cascade damping={0.2}>
          <div className="homeSticker_box hover1">
            <IconContext.Provider value={{ size: "5em" }}>
              <GiHomeGarage />
            </IconContext.Provider>
            <h4>{t("parking")}</h4>
            <p>{t("parking-desc")}</p>
          </div>
          <div className="homeSticker_box">
            <IconContext.Provider value={{ size: "5em" }}>
              <MdOutlineFreeBreakfast />
            </IconContext.Provider>
            <h4>{t("breakfast")}</h4>
            <p>{t("breakfast-desc")}</p>
          </div>
          <div className="homeSticker_box">
            <IconContext.Provider value={{ size: "5em" }}>
              <FaWifi />
            </IconContext.Provider>
            <h4>Wifi</h4>
            <p>{t("wifi")}</p>
          </div>
          <div className="homeSticker_box">
            <IconContext.Provider value={{ size: "5em" }}>
              <BiDrink />
            </IconContext.Provider>
            <h4>{t("drinks")}</h4>
            <p>{t("drinks-desc")}</p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default HomeStickers;
