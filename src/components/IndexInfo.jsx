import React from "react";
import { useTranslation } from "react-i18next";
import { Fade, Slide } from "react-awesome-reveal";

const IndexInfo = () => {
  const [t] = useTranslation();

  return (
    <div>
      <article className="description-index adjust">
        <Fade cascade>
          <div className="boxes adjust">
            <h2>{t("about-us")}</h2>
          </div>
          <div className="boxes adjust">
            <p>{t("about-info")}</p>
          </div>
        </Fade>
      </article>
    </div>
  );
};

export default IndexInfo;
