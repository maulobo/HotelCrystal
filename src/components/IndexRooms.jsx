import Card from "react-bootstrap/Card";
import somePicture1 from "../images/Habitaciones/Simple/s4.JPG";
import somePicture2 from "../images/Habitaciones/Doble/d2.JPG";
import somePicture3 from "../images/Habitaciones/triple/t2.JPG";
import somePicture4 from "../images/Habitaciones/superior/sup5.JPG";
import "./indexRooms.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const cardsInfoEs = [
  {
    title: "Habitación Simple",
    img: somePicture1,
  },
  {
    title: "Habitación Doble",
    img: somePicture2,
  },
  {
    title: "Habitación Triple",
    img: somePicture3,
  },
  {
    title: "Habitación Cuadruple",
    img: somePicture4,
  },
];
const cardsInfoEn = [
  {
    title: "Simple Room",
    img: somePicture1,
  },
  {
    title: "Doble Room",
    img: somePicture2,
  },
  {
    title: "Triple Room",
    img: somePicture3,
  },
  {
    title: "Quadruple Room",
    img: somePicture4,
  },
];

const IndexRooms = () => {
  const { t, i18n } = useTranslation();
  return (
    <article className="indexrooms-container">
      <Fade cascade delay={800}>
        <div className="indexrooms-cards">
          {i18n.languages.length === 2
            ? cardsInfoEn.map((el, index) => (
                <div key={index} className="item-card">
                  <Card style={{ width: "20rem" }}>
                    <Card.Img variant="top" src={el.img} />
                    <Card.Body>
                      <Card.Title>{el.title}</Card.Title>
                      <Card.Text>{el.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))
            : cardsInfoEs.map((el, index) => (
                <div key={index} className="item-card">
                  <Card style={{ width: "20rem" }}>
                    <Card.Img variant="top" src={el.img} />
                    <Card.Body>
                      <Card.Title>{el.title}</Card.Title>
                      <Card.Text>{el.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
        </div>
      </Fade>
      <div>
        <Fade cascade delay={800}>
          <Link to="/servicios" className="button2">
            <IconContext.Provider value={{ size: "2.5em" }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>
          </Link>
        </Fade>
      </div>
    </article>
  );
};

export default IndexRooms;
