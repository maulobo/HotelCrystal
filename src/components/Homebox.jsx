import React from "react";
import "./Homebox.css";
import haba from "../images/homeBox.JPG";
import { useTranslation } from "react-i18next";

const Homebox = () => {
  const [t] = useTranslation();
  return (
    <>
      <section className="homebox">
        <article className="box_item">
          <div className="box_content1">
            <img src={haba} alt="hab" className="box__picture " />
          </div>
        </article>
        <article className="box_item">
          <div className="box_content2">
            <div
              className="box_info"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <h2>{t("our-hotel")}</h2>
              <p>{t("our-hotel-info")}</p>

              <div>
                <button className="button">{t("our-hotel-button")}</button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Homebox;
