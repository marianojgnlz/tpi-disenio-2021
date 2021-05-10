import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Form,
  Jumbotron,
  Button,
  Col,
  Row,
  Image,
} from "react-bootstrap";
import globalContext from "../context/globalContext";
import Logo from "../static/images/inmoviliaria-1.svg";

const Login = ({ history }) => {
  const GlobalContext = useContext(globalContext);
  const { userLogin, setActiveNavbarLink } = GlobalContext;

  document.querySelector("body").style.background = "#2B3860";
  const [login, setLogin] = useState(localStorage.setItem("user", ""));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login?.includes("cliente")) {
      history.push("/cliente/inicio");
      document.querySelector("body").style.background = "";
    }
    if (login?.includes("agenteinmobiliario")) {
      history.push("/agenteinmobiliario/inicio");
      document.querySelector("body").style.background = "";
    }
    if (login?.includes("secretariacomercializacion")) {
      history.push("/secretariacomercializacion/inicio");
      document.querySelector("body").style.background = "";
    }
    if(login?.includes("cajera")) {
      history.push('/cajera/inicio')
      document.querySelector("body").style.background = "";
    }
    localStorage.setItem("user", login);
    userLogin(login);
  };

  const handleChange = (e) => {
    setLogin(e.target.value.split("@")[0]);
  };

  useEffect(() => {
    setActiveNavbarLink('link-0')
  }, [])
  return (
    <>
      <div className='centra2'>
      <Container
        fluid="xs"
        className="mx-auto mt-5"
        style={{ maxWidth: "60%" }}
      >
        <Jumbotron className="p-0">
          <Row>
            <Col
              className="p-5"
              sm="8"
              style={{
                display: "grid",
                justifyContent: "center",
                background: "",
                borderTopLeftRadius: ".3rem",
                borderBottomLeftRadius: ".3rem",
              }}
            >
              <h1 className="font-weight-bold">Ingresar a Dofus</h1>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Ingrese su correo</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@example.com"
                    onChange={(e) => handleChange(e)}
                  />
                  <Form.Text className="text-muted">
                    Nunca compartiremos tu contraseña con nadie.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Ingrese su contraseña</Form.Label>
                  <Form.Control type="password" placeholder="********" />
                </Form.Group>
                <Button variant="primary" type="submit" block style={{background:'#8E97C8', border:'none', borderRadius:'9px'}}>
                Ingresar
                </Button>
              </Form>
            </Col>
            <Col
              sm="4"
              style={{
                background: "#8E97C8",
                borderTopRightRadius: ".3rem",
                borderBottomRightRadius: ".3rem",
                display: "grid",
                alignContent: "center",
              }}
              className="justify-content-center"
            >
              <Image src={Logo} style={{ minHeight: "80%"}} />
              <h1 className="font-weight-bold mt-2 ml-3"   style={{textShadow:'3px 3px grey', color:'white'}}>Dofus 2.0</h1>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
      </div>
    </>
  );
};

export default Login;
