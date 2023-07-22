import {Formik, Field, ErrorMessage} from 'formik';
import { Form, Row, Col, Button} from 'react-bootstrap';
import * as Yup from 'yup' //Importo todos los componentes de yup y los guardo en la variable Yup
import useCategories from '../../hooks/useCategories';
import useDrinks from '../../hooks/useDrinks';
import cocktailsImage from '../../../public/cocktails.jpg';



const SearchForm = () => {

  const {categories} = useCategories();
  const {getDrinks, loading} = useDrinks()

  const initialValues = {
    ingredient : "",
    category : ""
  }

  const validationSchema = Yup.object({
    ingredient : Yup.string().required("El nombre del ingrediente es obligatorio"),
    category : Yup.string().required("La categoría es obligatoria")

  })

  const handleSubmit = (values) => {
    getDrinks(values)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {
        (formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div className="image-container" style={{ display: "flex", justifyContent: "center", margin: "30px" }}>
              <img src={cocktailsImage} alt="" style={{ maxWidth: "100%" }} />
            </div>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor='ingredient'>Nombre del ingrediente:</Form.Label>
                  <Field id="ingredient" type="text" placeholder="Tequila, vodka, etc" name="ingredient" as={Form.Control}/>
                  <ErrorMessage name='ingredient' component={Form.Text} className='text-danger ms-2'/>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label htmlFor='category'>Categoría:</Form.Label>
                  <Field id="category" name="category" as={Form.Select}>
                    <option value="" defaultValue="" hidden>Seleccionar categoría</option>
                      {
                        categories.sort((a,b) =>(a.strCategory > b.strCategory ? 1 : a.strCategory < b.strCategory ? -1 : 0)).map(category => (
                          <option value={category.strCategory} key={category.strCategory}>
                            {category.strCategory}
                          </option>
                        ))
                      }
                  </Field>
                  <ErrorMessage name='category' component={Form.Text} className='text-danger ms-2'/>
                </Form.Group>
              </Col>
            </Row>
            <Row className='justify-content-center mt-3'>
              <Col md={3}>
                <Button style={{ backgroundImage: 'linear-gradient(to bottom right, #B98AFF, #FF00FF)', color: '#ffffff', border: '0px solid #000000'}} disabled={loading} className='w-100 my-4 text-uppercase' type='submit'>
                  {loading ? "Buscando..." : "Buscar bebidas"}
                </Button>
              </Col>
            </Row>
          </Form>
        )
      }
    </Formik>
  )
}

export default SearchForm
