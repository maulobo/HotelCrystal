import React, { useState } from "react";
import doble1 from "../images/Habitaciones/Doble/d2.JPG";
import doble2 from "../images/Habitaciones/Doble/d3.JPG";
import doble3 from "../images/Habitaciones/Doble/d5.JPG";
import simple1 from "../images/Habitaciones/Simple/s1.JPG";
import simple2 from "../images/Habitaciones/Simple/s2.JPG";
import simple3 from "../images/Habitaciones/Simple/s3.JPG";
import triple1 from "../images/Habitaciones/triple/t2.JPG";
import triple2 from "../images/Habitaciones/triple/t3.JPG";
import triple3 from "../images/Habitaciones/triple/t6.JPG";
import superior1 from "../images/Habitaciones/superior/sup2.JPG";
import superior2 from "../images/Habitaciones/superior/sup3.JPG";
import superior3 from "../images/Habitaciones/superior/sup5.JPG";

import Modal1 from "./Modal";

import "./roomcards.css";
import { useTranslation } from "react-i18next";
import { BsFillPersonFill } from "react-icons/bs";
import SmallModal from "./SmallModal";

const RoomCards = () => {
  const [t] = useTranslation();
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);

  return (
    <div className="rooms-full-container">
      <div className="rooms-opacity">
        <div className="rooms-container">
          <h6>{t("room-indexh6")} </h6>
          <h3>{t("room-indexh3")}</h3>
          <div className="rooms-cards-container">
            <div
              className="room-item1 room-item"
              variant="primary"
              onClick={() => setModalShow1(true)}
            >
              {t("DoubleRoom")}
            </div>
            <Modal1 show={modalShow1} onHide={() => setModalShow1(false)}>
              <h3 style={{ textAlign: "center" }}>{t("DoubleRoom")}</h3>
              <img src={doble1} className="d-block w-100" alt="doble1" />
              <img src={doble2} className="d-block w-100" alt="doble2" />
              <img src={doble3} className="d-block w-100" alt="doble3" />
              <p>{t("room-description-1")}</p>
              <p>Standard: $9.600 / Superior: $11.500 </p>
              <p>
                <BsFillPersonFill />
                <BsFillPersonFill />
              </p>
            </Modal1>

            <div
              className="room-item2 room-item"
              variant="primary"
              onClick={() => setModalShow2(true)}
            >
              {t("SimpleRoom")}
            </div>
            <Modal1 show={modalShow2} onHide={() => setModalShow2(false)}>
              <h3 style={{ textAlign: "center" }}>{t("TripleRoom")}</h3>
              <img src={simple1} className="d-block w-100" alt="simple1" />
              <img src={simple2} className="d-block w-100" alt="simple2" />
              <img src={simple3} className="d-block w-100" alt="simple2" />
              <p>{t("room-description-2")}</p>
              <p>Standard: $7.900 / Superior: $9.500 </p>
              <p>
                <BsFillPersonFill />
              </p>
            </Modal1>

            <div
              className="room-item3 room-item"
              variant="primary"
              onClick={() => setModalShow4(true)}
            >
              {t("TripleRoom")}
            </div>

            <Modal1 show={modalShow4} onHide={() => setModalShow4(false)}>
              <h3 style={{ textAlign: "center" }}>{t("TripleRoom")}</h3>
              <img src={triple1} alt="trirple1" />
              <img src={triple2} alt="trirple2" />
              <img src={triple3} alt="trirple3" />
              <p>{t("room-description-3")}</p>
              <p>Standard: $11.900 / Superior: $14.500 </p>
              <p>
                <BsFillPersonFill />
                <BsFillPersonFill />
                <BsFillPersonFill />
              </p>
            </Modal1>

            <div
              className="room-item4 room-item"
              variant="primary"
              onClick={() => setModalShow3(true)}
            >
              {t("Superior")}
            </div>

            <Modal1 show={modalShow3} onHide={() => setModalShow3(false)}>
              <h3 style={{ textAlign: "center" }}>{t("Superior")}</h3>
              <img src={superior1} alt="superior1" />
              <img src={superior2} alt="superior2" />
              <img src={superior3} alt="superior3" />
              <p>{t("room-description-4")}</p>
              <p>Standard: $14.400 </p>
              <p>
                <BsFillPersonFill />
                <BsFillPersonFill />
                <BsFillPersonFill />
                <BsFillPersonFill />
              </p>
            </Modal1>
          </div>
          <hr />
          <SmallModal />
        </div>
      </div>
    </div>
  );
};

export default RoomCards;
