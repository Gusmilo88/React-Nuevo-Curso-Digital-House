import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { filterDrinksService } from "../services/drinks.service";

const DrinksContext = createContext(null)

const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState([]);

    const getDrinks = async (data) => {
        try {
            
            const {ingredient, category} = data

            const drinkData = await filterDrinksService(ingredient, category)

            setDrinks(drinkData)

        } catch (error) {
            console.log(error);
        }
    }

    const contextValue = {
        drinks,
        getDrinks
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
