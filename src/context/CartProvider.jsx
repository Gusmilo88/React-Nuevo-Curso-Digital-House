import { createContext, useState } from "react"
import PropTypes from 'prop-types'
import useDrinks from "../hooks/useDrinks";

const CartContext = createContext(null)

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const {drinks} = useDrinks()

    const addCart = (idDrink) => {
        const drinkItemCart = drinks.find(drink => drink.idDrink === idDrink)
        setCart([...cart, drinkItemCart])
    }

    const contextValues = {
        cart,
        addCart
    }

  return (
    <CartContext.Provider value={contextValues}>
        {children}
    </CartContext.Provider>
  )
};

CartProvider.prototype = {
    children : PropTypes.node.isRequired
}

export {
    CartProvider,
    CartContext
} 
