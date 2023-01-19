import React from "react";
import "./homeStickers.css";
import { GiHomeGarage } from "react-icons/gi";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
import { IconContext } from "react-icons";

const HomeStickers = () => {
  return (
    <div
      className="homesticker_container"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div>
        <h6>VACATIONS ARE </h6>
      </div>
      <div>
        <h3>Inspired Incentives</h3>
      </div>
      <div className="homeSticker_box_container">
        <div className="homeSticker_box hover1">
          <IconContext.Provider value={{ size: "5em" }}>
            <GiHomeGarage />
          </IconContext.Provider>
          <h4>Estacionamiento</h4>
          <p>Aca podes estacionar el auto maquina, vos tranquilo</p>
        </div>
        <div className="homeSticker_box">
          <IconContext.Provider value={{ size: "5em" }}>
            <MdOutlineFreeBreakfast />
          </IconContext.Provider>
          <h4>Desayuno</h4>
          <p>Si queres comer algo piolita obvio que aca tenes varon</p>
        </div>
        <div className="homeSticker_box">
          <IconContext.Provider value={{ size: "5em" }}>
            <FaWifi />
          </IconContext.Provider>
          <h4>Wifi</h4>
          <p>No se si hay Wifi la verdad pero vos ponele</p>
        </div>
        <div className="homeSticker_box">
          <IconContext.Provider value={{ size: "5em" }}>
            <BiDrink />
          </IconContext.Provider>
          <h4>Escavio</h4>
          <p>Si queres chuparte algo tambien rey, aca tenemo</p>
        </div>
      </div>
    </div>
  );
};

export default HomeStickers;
