import Carousel from "react-bootstrap/Carousel";
import "../components/roomcards.css";
const Carrousel = ({ children }) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="fotitos">{children[1]}</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="fotitos">{children[2]}</div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="fotitos">{children[3]}</div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel;
