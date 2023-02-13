import { Helmet, HelmetProvider } from "react-helmet-async";
import { BtnWts } from "../../components/BtnWts";
import Footer from "../../components/Footer";
import RoomCards from "../../components/RoomCards";

const Servicios = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Hotel Crystal</title>
          <meta
            name="author"
            content="Lobo Mauro Andrés, de Prado Valeria Anabel"
          />
          <meta
            name="description"
            content="En el Hotel Crystal ofrecemos a los huéspedes, un espacio de descanso, confort y excelente nivel de servicio, el mismo esta bicado en pleno centro de la Ciudad de Neuquén"
          />
          <meta
            name="keywords"
            content="Hotel Crystal, Neuquén, capital, habitaciones, servicios, desayuno, sala de conferencias, vacaciones"
          ></meta>
        </Helmet>
      </HelmetProvider>
      <BtnWts />
      <RoomCards />
      <Footer />
    </>
  );
};

export default Servicios;
