import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container style={{ backgroundColor: "tomato" }}>
      <Row>
        <Col md={12} className="text-center">
          <Link to={"/"}>
            <i
              className="fa-solid fa-house fa-beat"
              style={{ color: "#ffffff" }}
            ></i>
            <h2>Volver al home</h2>
          </Link>
          <h1 className="text-center text-white">404</h1>
          <p className="text-center text-white">Página no encontrada</p>
          <img src="../../../public/1.png" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
