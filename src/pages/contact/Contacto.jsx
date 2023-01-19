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

const initialForm = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
};

const validationsForm = (form) => {
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,400}$/;
  let regexNumber = /[0-9]{3}[-][0-9]{7}/;
  //cada imput es independiente si o si

  let errors = {};

  if (!form.name.trim()) {
    errors.name = "Recuerde completar con su nombre.";
  }
  if (!form.lastname.trim()) {
    errors.lastname = "Recuerde completar con su apellido.";
  }
  if (!form.phone.trim()) {
    errors.phone = "ingresa numero de telefono";
  } else if (!regexNumber.test(form.phone.trim()))
    errors.phone =
      "ingresa tu telefono sin el prefijo 0,  - su número sin el (15) ej: 351-23432501";
  if (!form.email.trim()) {
    errors.email = "Ingresa tu email";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Tu email no es valido, ej: usuario@dominio.com";
  }

  return errors;
};
const Contacto = () => {
  const {
    form,
    erros,
    loading,
    response,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <main className="main-contact">
        <div className="contact-wrapper">
          <Container className="container-contact ">
            <Row>
              <Col fluid="lg">
                <div className="contact-index">
                  <h4 style={{ textAlign: "center", padding: "20px" }}>
                    Estamos a disposicion para responder todas tus consultas.
                  </h4>
                  <Form
                    className="form margin-f"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    method="POST"
                  >
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre</Form.Label>
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
                        <Form.Label>Apellido</Form.Label>
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
                        <Form.Label>Número telefónico</Form.Label>
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
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Correo</Form.Label>
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
                      <Form.Label>Datos adicionales</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <button
                      type="submit"
                      className="btn-submit"
                      style={{ marginTop: "1rem" }}
                    >
                      Enviar
                    </button>
                  </Form>
                </div>

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
