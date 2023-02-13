import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
//icons

//css-propio
import "./contacto.css";

import { useForm } from "../../hooks/useForm";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
import Loader from "../../components/Loader";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Contacto = () => {
  const [t] = useTranslation();
  const initialForm = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
  };

  const validationsForm = (form) => {
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    let regexNumber = /[0-9]{3}[-][0-9]{7}/;
    //cada imput es independiente si o si

    let errors = {};

    if (!form.name.trim()) {
      errors.name = `${t("errorForm.nameError")}`;
    }
    if (!form.lastname.trim()) {
      errors.lastname = `${t("errorForm.lastnameError")}`;
    }
    if (!form.phone.trim()) {
      errors.phone = `${t("errorForm.numberError")}`;
    } else if (!regexNumber.test(form.phone.trim()))
      errors.phone = `${t("errorForm.numberErrorII")}`;
    if (!form.email.trim()) {
      errors.email = `${t("errorForm.emailError")}`;
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = `${t("errorForm.emailErrorData")}`;
    }

    return errors;
  };

  const {
    form,
    erros,
    loading,
    response,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useForm(initialForm, validationsForm);
  //Validacion fecha
  const date = new Date();
  const date1 = date.toISOString().substring(0, 10);

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
            content="Contactate para vivir la experiencia de nuestro Hotel en el centro de Neuquén"
          />
          <meta
            name="keywords"
            content="Hotel Crystal, Neuquén, capital, habitaciones, servicios, desayuno, sala de conferencias, vacaciones"
          ></meta>
        </Helmet>
      </HelmetProvider>
      <main className="main-contact">
        <div className="contact-wrapper">
          <Container className="container-contact ">
            <Row>
              <Col fluid="lg">
                <div className="contact-index">
                  <h4 style={{ textAlign: "center", padding: "20px" }}>
                    {t("contact-h4")}
                  </h4>
                  <Form
                    className="form margin-f"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    method="POST"
                  >
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>{t("name")}</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={form.name}
                          required
                        />
                        {erros.name && <p className="error">{erros.name}</p>}
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>{t("lastName")}</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastname"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={form.lastname}
                          required
                        />
                        {erros.lastname && (
                          <p className="error">{erros.lastname}</p>
                        )}
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>{t("Phone")}</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Código de área-número sin 15"
                          name="phone"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={form.phone}
                          required
                        />
                        {erros.phone && <p className="error">{erros.phone}</p>}
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridFechaI">
                        <Form.Label>{t("formHabitaciones.in")}:</Form.Label>
                        <Form.Control
                          type="date"
                          name="in"
                          className="input_in"
                          min={date1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={form.in}
                          required
                        />
                        {erros.in && <p className="error">{erros.in}</p>}
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridformGridFechaII">
                        <Form.Label>{t("formHabitaciones.on")}:</Form.Label>
                        <Form.Control
                          type="date"
                          name="on"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={form.on}
                        />
                      </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>{t("email")}</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.email}
                        required
                      />
                      {erros.email && <p className="error">{erros.email}</p>}
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>{t("message")}</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <button
                      type="submit"
                      className="btn-submit"
                      style={{ marginTop: "1rem" }}
                    >
                      {t("send")}
                    </button>
                  </Form>
                </div>
                {loading && <Loader />}
                {response && (
                  <Alert variant="light">
                    <Alert.Heading>Datos enviados correctamente</Alert.Heading>
                    <p>
                      Gracias por su reserva, en breve se comunicarán con usted
                      por mail verificando los datos, recuerde revisar su
                      casilla de email Inbox o spam.
                    </p>
                  </Alert>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacto;
