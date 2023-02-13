import React from "react";
import { SiWhatsapp } from "react-icons/si";
import "./btnwap.css";

const BtnWts = () => {
  return (
    <div className="container-btnW">
      <a
        href="https://api.whatsapp.com/send?phone=2996263856"
        className="wts-btn"
      >
        <SiWhatsapp />
      </a>
    </div>
  );
};

export { BtnWts };
