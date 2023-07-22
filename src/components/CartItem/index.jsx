import { ListGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'

const CartItem = ({drink}) => {
  return (
    <div>
      <ListGroup.Item> {drink.strDrink} </ListGroup.Item>
    </div>
  )
}

CartItem.propTypes = {
    
}

export default CartItem
