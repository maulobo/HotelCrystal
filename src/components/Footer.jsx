import "./footer.css";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="site-footer-main">
        <div className="footer-container">
          <div className="footer-box">
            <img src={logo} alt="logo" className="footer-logo" />
          </div>
          <div className="footer-box">
            <h6>Contact</h6>
            <h6>mail</h6>
            <h6>ig</h6>
            <h6>telefono</h6>
          </div>
        </div>
      </div>
      <div className="site-footer-copyright">
        <p>
          © Built with pride and caffeine by Anabel de Prado y Mauro Lobo. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
