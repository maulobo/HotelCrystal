import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carrousel from "./Carrousel";
import { AiOutlineWifi } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { BsSnow } from "react-icons/bs";
import { FaShower } from "react-icons/fa";
import { MdSmokeFree } from "react-icons/md";
import "./roomcards.css";

const Modal1 = (props) => {
  const { children } = props;
  console.log(children);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {children[0]}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carrousel children={children} />
        <div className="modal-info">
          {children[4]}
          <div className="modal-icons">
            <IconContext.Provider value={{ size: "2em" }}>
              <AiOutlineWifi />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "2em" }}>
              <BsSnow />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "2em" }}>
              <FaShower />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "2em" }}>
              <MdSmokeFree />
            </IconContext.Provider>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal1;
