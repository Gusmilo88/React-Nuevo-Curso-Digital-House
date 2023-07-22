import { Button, Col, Image, Modal, Row } from "react-bootstrap"
import useDrinks from "../../hooks/useDrinks"
import useCart from "../../hooks/useCart"
import { types } from "../../types"
import { getDrinkById } from "../../helpers";


const DrinkModalDetail = () => {

  const {showModal, handleShowModalClick, recipe, drinks} = useDrinks()

  const {idDrink, strDrink, strDrinkThumb, strInstructions} = recipe

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

  const { dispatch } = useCart();

  const handleAddCart = () => {

    const drink = getDrinkById(drinks, idDrink)

    dispatch({
        type: types.addItemToCart,
        payload : drink
    })
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
        <Modal.Body className="text-aling-center">
          <div><h5>Instructions:</h5>
          <p>{strInstructions}</p>
          <hr />
          <h5>Ingredients & measures:</h5>
          <ul>
            {showIngredients()}
          </ul>
          </div>
          <Button
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, #00FFFF, #00CED1, #008B8B)",
              color: "#ffffff",
            }}
            className="w-100 text-uppercase mt-2"
            onClick={handleAddCart}
          >
            Comprar
          </Button>
        </Modal.Body>
        </Col>
      </Row>
      </Modal>
  )
}

export default DrinkModalDetail
