import { Button, Card, Col } from "react-bootstrap"
import PropTypes from 'prop-types'
import useDrinks from "../../hooks/useDrinks"


const DrinkCard = ({drink}) => {

    const {strDrinkThumb, strDrink, idDrink} = drink
    const {handleDrinkIdClick, handleShowModalClick} = useDrinks()

  return (
    <Col md={6} lg={3}>
        <Card className='mb-4'>
            <Card.Img variant='top' src={strDrinkThumb} alt={`Imagen de ${strDrink}`}/>
            <Card.Body>
                <Card.Title>
                    {strDrink}
                </Card.Title>
                <Button variant={"primary"} className='w-100 text-uppercase mt-2' onClick={() => {
                    handleDrinkIdClick(idDrink) 
                    handleShowModalClick()
                    }
                    }
                >
                    Ver receta
                </Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

DrinkCard.propTypes = {
    drink : PropTypes.object.isRequired,
    strDrinkThumb : PropTypes.string.isRequired,
    strDrink : PropTypes.string.isRequired
}

export default DrinkCard
