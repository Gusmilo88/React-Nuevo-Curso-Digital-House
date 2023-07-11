import { Row } from "react-bootstrap"
import DrinkCard from "../DrinkCard"
import useDrinks from "../../hooks/useDrinks"

const DrinksList = () => {

    const {drinks} = useDrinks()

  return (

    <Row>
        {drinks.map((drink) => (
                <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
    </Row>

  )
}

export default DrinksList
