import { ListGroup, Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";
import cartEmptyImage from '../../../public/emptyCart.png';
import CartItem from "../CartItem";


const CartCanvas = ({ showCart, handleCloseCart }) => {

    const {cart} = useCart()

  return (
    <div>
      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mi carrito <i className="fa-solid fa-cart-shopping fa-bounce"></i></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ListGroup>
                {
                    cart.length 
                    ?
                    (
                        cart.map(drink => <CartItem key={drink.idDrink} drink={drink} /> )
                    )
                    :(
                        <>
                          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100px" }}>
                          <h4>El carrito está vacío</h4>
                          <img src={cartEmptyImage} alt="Imagen de un carrito triste" />
                          </div>
                        </>
                      )}
            </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

CartCanvas.propTypes = {
  showCart: PropTypes.bool,
  handleCloseCart: PropTypes.func,
};

export default CartCanvas;
