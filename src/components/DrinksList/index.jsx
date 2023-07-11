import { Row } from "react-bootstrap"
import DrinkCard from "../DrinkCard"
import useDrinks from "../../hooks/useDrinks"

const DrinksList = () => {

    const {drinks} = useDrinks()

  return (

    <Row className="mt-3">
        {drinks.map((drink) => (
                <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
    </Row>

  )
}

export default DrinksList
