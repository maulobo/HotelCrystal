import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import somePicture from "../images/Habitaciones/Doble/d2.JPG";
import "./indexRooms.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const cardsInfoEs = [
  {
    title: "La carta",
    description: "la descripcion piolita",
    img: somePicture,
  },
  {
    title: "La carta 2",
    description: "la descssssripcion piolita",
    img: somePicture,
  },
  {
    title: "La carta 3",
    description: "la descssssripcion piolita",
    img: somePicture,
  },
];
const cardsInfoEn = [
  {
    title: "Card1",
    description: "la descripcion ingles",
    img: somePicture,
  },
  {
    title: "Card2",
    description: "la descssssripcion aleman",
    img: somePicture,
  },
  {
    title: "Card3",
    description: "la descssssripcion piolita",
    img: somePicture,
  },
];

const IndexRooms = () => {
  const { t, i18n } = useTranslation();
  console.log(i18n.languages);
  return (
    <article className="indexrooms-container">
      <h2>Titulo de las cards</h2>
      <div className="indexrooms-cards">
        {i18n.languages.length === 2
          ? cardsInfoEn.map((el, index) => (
              <div key={index}>
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
              <div key={index}>
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
      <div>
        <Link to="/servicios" className="button2">
          <IconContext.Provider value={{ size: "2.5em" }}>
            <AiOutlineArrowRight />
          </IconContext.Provider>
        </Link>
      </div>
    </article>
  );
};

export default IndexRooms;
