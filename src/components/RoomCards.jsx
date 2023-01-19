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

import Modal1 from "./Modal";

import "./roomcards.css";

const RoomCards = () => {
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);

  return (
    <div className="rooms-full-container">
      <div className="rooms-opacity">
        <div className="rooms-container">
          <h6>BIG SIZED ROOMS</h6>
          <h3>Aca va el titulo de las habitaciones</h3>
          <div className="rooms-cards-container">
            <div
              className="room-item1 room-item"
              variant="primary"
              onClick={() => setModalShow1(true)}
            >
              Habitacion Doble
            </div>
            <Modal1 show={modalShow1} onHide={() => setModalShow1(false)}>
              <h3 style={{ textAlign: "center" }}>Habitacion Doble</h3>
              <img src={doble1} className="d-block w-100" alt="doble1" />
              <img src={doble2} className="d-block w-100" alt="doble2" />
              <img src={doble3} className="d-block w-100" alt="doble3" />
              <p>
                Las habitaciones dobles cuentan con dos camas individuales o una
                cama matrimonial. Cuenta con su juego de sábanas y un cubrecama.
                También está a disposición una frazada, que se puede encontrar
                en el armario o ya puesta en la cama dependiendo del clima. Las
                habitaciones vienen equipadas con un baño con ducha.
              </p>
            </Modal1>

            <div
              className="room-item2 room-item"
              variant="primary"
              onClick={() => setModalShow2(true)}
            >
              Habitacion Simple
            </div>
            <Modal1 show={modalShow2} onHide={() => setModalShow2(false)}>
              <h3 style={{ textAlign: "center" }}>Habitacion simple</h3>
              <img src={simple1} className="d-block w-100" alt="simple1" />
              <img src={simple2} className="d-block w-100" alt="simple2" />
              <img src={simple3} className="d-block w-100" alt="simple2" />
              <p>
                Las habitaciones singles cuentan con una cama individual de
                medidas estándar. Cuenta con su juego de sábanas y un cubrecama.
                También está a disposición del huésped una frazada por si lo
                desea, que se puede encontrar en el armario o ya puesta en la
                cama dependiendo del clima. Las habitaciones vienen equipadas
                con un baño con ducha. Sobre las camas encontraremos un juego de
                toallas, compuesto por una toalla, un toallón y una segunda
                toalla destinada para ser usada como alfombra al salir de la
                ducha. Dentro del baño se encontrará con un jabón tocador y un
                sachet 2×1 de shampoo y acondicionador.
              </p>
            </Modal1>

            <div
              className="room-item3 room-item"
              variant="primary"
              onClick={() => setModalShow4(true)}
            >
              Habitacion triple
            </div>

            <Modal1 show={modalShow4} onHide={() => setModalShow4(false)}>
              <h3 style={{ textAlign: "center" }}>Habitacion triple</h3>
              <img src={triple1} alt="trirple1" />
              <img src={triple2} alt="trirple2" />
              <img src={triple3} alt="trirple3" />
            </Modal1>

            <div
              className="room-item4 room-item"
              variant="primary"
              onClick={() => setModalShow3(true)}
            >
              Habitacion Superior
            </div>

            <Modal1 show={modalShow3} onHide={() => setModalShow3(false)}>
              <h3 style={{ textAlign: "center" }}>Habitacion Superior</h3>
              <img src={doble1} alt="" />
              <img src={doble2} alt="" />
              <img src={doble2} alt="" />
            </Modal1>
          </div>
          <hr />
          <h4>Rooms mas rooms</h4>
        </div>
      </div>
    </div>
  );
};

export default RoomCards;
