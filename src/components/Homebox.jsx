import React from "react";
import "./Homebox.css";
import haba from "../images/homeBox.JPG";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const Homebox = () => {
  const [t] = useTranslation();
  return (
    <>
      <Fade delay={800} cascade>
        <section className="homebox">
          <article className="box_item">
            <div className="box_content1">
              <img src={haba} alt="hab" className="box__picture " />
            </div>
          </article>
          <article className="box_item">
            <div className="box_content2">
              <div className="box_info">
                <h2>{t("our-hotel")}</h2>
                <p>{t("our-hotel-info")}</p>

                <div>
                  <button className="button3">{t("our-hotel-button")}</button>
                </div>
              </div>
            </div>
          </article>
        </section>
      </Fade>
    </>
  );
};

export default Homebox;
