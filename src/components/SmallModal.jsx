import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import "../pages/srv.css";

const SmallModal = () => {
  const [smShow, setSmShow] = useState(false);
  const [t] = useTranslation();

  return (
    <>
      <div className="button-serv">
        <Button onClick={() => setSmShow(true)} className="services-btn">
          {t("hoursNsrv")}
        </Button>

        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm"></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modalshow1">
              <h3>{t("schedule")}</h3>
              <p>Check In: 12:00 PM</p>
              <p>Check Out: 10:00 AM</p>
              <hr />
              <h3>{t("breakfast")}</h3>
              <p>{t("all")}: 7:30 AM - 10:00 AM</p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default SmallModal;
