import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { filterDrinkService } from "../services/drinks.service";

const DrinksContext = createContext(null)

const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState([]);

    const getDrink = async (data) => {
        try {
            
            const {ingredient, category} = data

            const drinkData = await filterDrinkService(ingredient, category)

            setDrinks(drinkData)

        } catch (error) {
            console.log(error);
        }
    }

    const contextValue = {
        drinks,
        getDrink
    }

  return (

    <DrinksContext.Provider value={contextValue}>
        {children}
    </DrinksContext.Provider>

  )
}

DrinksProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export {
    DrinksContext,
    DrinksProvider
}
