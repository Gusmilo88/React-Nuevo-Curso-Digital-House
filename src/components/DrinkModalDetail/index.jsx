import { Col, Image, Modal, Row } from "react-bootstrap"
import useDrinks from "../../hooks/useDrinks"

const DrinkModalDetail = () => {

  const {showModal, handleShowModalClick, recipe} = useDrinks()

  const {strDrink, strDrinkThumb, strInstructions} = recipe

  const showIngredients = () => {
    const ingredients = []

    for (let i = 1; i < 15; i++) {
      if(recipe[`strIngredient${i}`]){
        ingredients.push(
          <li>
            {recipe[`strIngredient${i}`]} | {recipe[`strMeasure${i}`]} 
          </li>
        )
      }
      
    }
    return ingredients
  }

  return (
    <Modal show={showModal} onHide={handleShowModalClick} size="xl">
      <Row>
        <Col>
        <Image 
        src={strDrinkThumb} 
        alt={`Imagen de ${strDrink}`} 
        fluid 
        className="rounded-start" />
        </Col>
        <Col>
        <Modal.Header closeButton >
          <Modal.Title>{strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Instructions:</h5>
          <p>{strInstructions}</p>
          <hr />
          <h5>Ingredients & measures:</h5>
          <ul>
            {showIngredients()}
          </ul>
        </Modal.Body>
        </Col>
      </Row>
      </Modal>
  )
}

export default DrinkModalDetail
