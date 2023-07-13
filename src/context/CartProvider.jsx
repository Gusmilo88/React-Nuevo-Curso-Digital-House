import { createContext } from "react"
import PropTypes from 'prop-types'

const CartContext = createContext(null)

const CartProvider = ({children}) => {

    const contextValues = {
        
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
