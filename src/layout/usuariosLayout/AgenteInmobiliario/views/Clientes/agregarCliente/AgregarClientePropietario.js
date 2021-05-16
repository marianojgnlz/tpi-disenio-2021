import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import Layout from "../../../../../Layout";
import DatosDelClientePropietario from "./DatosDelClientePropietario";
import { Link } from "react-router-dom";
import BackButton from "../../../../../../components/BackButton";

const AgregarClientePropietario = ({ history }) => {
  const [validatedClientePropietario, setValidatedClientePropietario] =
    useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmitClientePropietario = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      handleShow();
      event.preventDefault();
      event.stopPropagation();
    }

    setValidatedClientePropietario(true);
  };

  return (
    <>
      <Layout>
        <Container fluid>
          <BackButton history={history} />
          <Form
            noValidate
            validated={validatedClientePropietario}
            onSubmit={handleSubmitClientePropietario}
          >
            <Row className="mt-3 justify-content-center">
              <Col xs={8}>
                <Card>
                  <Card.Header as="h2">
                    Datos del cliente propietario
                  </Card.Header>
                  <Card.Body>
                    <DatosDelClientePropietario />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center my-3">
              <Col xs={4}>
                <Button type="sumbit" variant="success" block>
                  Agregar Cliente
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>

        <Modal show={show} onHide={handleClose} backdrop="static">
          <Modal.Header
            style={{
              background: "#27d85a",
              color: "#FAFAFA",
              paddingBottom: "4px",
            }}
          >
            <h4 style={{ alignSelf: "flex-end" }}>Cliente registrado!</h4>
          </Modal.Header>
          <Modal.Body>
            <h5>Cliente registrado correctamente.</h5>
            <h6>Podra observarlo en la lista de clientes.</h6>
          </Modal.Body>
          <Modal.Footer>
            <Link to={"/agenteinmobiliario/Clientes"}>
              <Button type="primary" className="btn btn-success">
                Aceptar
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </Layout>
    </>
  );
};
export default AgregarClientePropietario;
