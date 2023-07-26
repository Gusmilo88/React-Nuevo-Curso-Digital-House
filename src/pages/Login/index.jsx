import { Formik, Field, ErrorMessage } from "formik";
import { Form, Row, Col, Button } from "react-bootstrap";
import * as Yup from "yup"; //Importo todos los componentes de yup y los guardo en la variable Yup
import cocktailsImage from "../../../public/cocktails.jpg";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("El email es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <div
            className="image-container"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "30px",
            }}
          >
            <img src={cocktailsImage} alt="" style={{ maxWidth: "100%" }} />
          </div>

          <Row className="justify-content-center">
            <Col md={4}>
              <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Field
                  id="email"
                  type="email"
                  placeholder="user@gmail.com"
                  name="email"
                  as={Form.Control}
                />
                <ErrorMessage
                  name="email"
                  component={Form.Text}
                  className="text-danger ms-2"
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label htmlFor="password">Password:</Form.Label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  as={Form.Control}
                />
                <ErrorMessage
                  name="password"
                  component={Form.Text}
                  className="text-danger ms-2"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center mt-3">
            <Col md={3}>
              <Button
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom right, #B98AFF, #FF00FF)",
                  color: "#ffffff",
                  border: "0px solid #000000",
                }}
                disabled={false}
                className="w-100 my-4 text-uppercase"
                type="submit"
              >
                Ingresá
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
