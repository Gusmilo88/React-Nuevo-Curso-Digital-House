import { Formik, Field, ErrorMessage } from "formik";
import { Form, Row, Col, Button } from "react-bootstrap";
import * as Yup from "yup"; //Importo todos los componentes de yup y los guardo en la variable Yup
import cocktailsImage from "../../../public/cocktails.jpg";

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
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

          <Form.Group>
            <Form.Label htmlFor="name">
              Nombre:
            </Form.Label>
            <Field
              id="name"
              type="text"
              placeholder="Tu nombre"
              name="name"
              as={Form.Control}
            />
            <ErrorMessage
              name="name"
              component={Form.Text}
              className="text-danger ms-2"
            />
          </Form.Group>

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

          <Form.Group>
            <Form.Label htmlFor="password">Password:</Form.Label>
            <Field
              id="password"
              type="password"
              name="password"
              as={Form.Control}
            />
            <ErrorMessage
              name="email"
              component={Form.Text}
              className="text-danger ms-2"
            />
          </Form.Group>

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
                Registrarse
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
