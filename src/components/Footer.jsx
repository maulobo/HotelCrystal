import "./footer.css";
import logo from "../images/logo.png";
import { BiMap } from "react-icons/bi";
import { AiFillPhone, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="footer-container">
          <div className="footer-box">
            <img src={logo} alt="logo" className="footer-logo" />
          </div>
          <div className="footer-box">
            <h6>
              <BiMap /> Avenida Coronel Olascoaga 268, Neuquen Argentina
            </h6>
            <h6>
              <AiOutlineMail /> crystalneuquen@yahoo.com
            </h6>
            <h6>
              <AiOutlineInstagram /> hotel.crystal.nqn
            </h6>
            <h6>
              <AiFillPhone /> 2994422414
            </h6>
          </div>
        </div>
      </div>
      <div className="site-footer-copyright">
        <p>
          © Built with pride and caffeine by Anabel de Prado y Mauro Lobo. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
