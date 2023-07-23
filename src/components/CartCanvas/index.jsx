import { Button, ListGroup, Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";
import cartEmptyImage from "../../../public/emptyCart.png";
import CartItem from "../CartItem";
import { types } from "../../types";

const CartCanvas = ({ showCart, handleCloseCart }) => {
  const { cart, dispatch } = useCart();

  const clearCart = () => {
    dispatch({
      type: types.cleanCart,
      payload: {}
    })
  }

  return (
    <div>
      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Mi carrito <i className="fa-solid fa-cart-shopping fa-bounce"></i>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {cart.length ? (
              <div className="d-flex flex-column justify-content-between">
                <div>
                {cart.map((drink) => (
                  <CartItem key={drink.idDrink} drink={drink} />
                ))}
                </div>
                <Button onClick={clearCart} variant="danger" style={{ margin: '2px' }}>Vaciar carrito</Button>
                <Button style={{ margin: '2px' }}>Continuar compra</Button>
              </div>
            ) : (
              <>
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{ minHeight: "100px" }}
                >
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
