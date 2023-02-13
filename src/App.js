import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Contacto from "./pages/contact/Contacto";
import Home from "./pages/home/Home";
import Servicios from "./pages/servicios/Servicios";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Hotel Iberia</title>
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
            content="Hotel Crystal, Neuquén, capital, habitaciones, servicios, desayuno, sala de conferencia, vacaciones"
          ></meta>
        </Helmet>
      </HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarComp />}>
            <Route index element={<Home />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="servicios" element={<Servicios />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
