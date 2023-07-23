import { Image, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import useCart from "../../hooks/useCart";
import { types } from "../../types";

const CartItem = ({ drink }) => {
  const { strDrink, strDrinkThumb, price, quantity } = drink;

  const { dispatch } = useCart();

  const handleAddItem = () => {
    dispatch({
      type: types.addItemToCart,
      payload: drink,
    });
  };

  const handleRemoveItem = () => {
    dispatch({
      type: types.removeItemFromCart,
      payload: drink,
    });
  };

  const handleRemoveAllItem = () => {
    dispatch({
      type: types.removeAllItemsFromCart,
      payload: drink,
    });
  };

  return (
    <div>
      <ListGroup.Item className="d-flex gap-4">
        <Image src={strDrinkThumb} width={"80px"} />
        <div style={{ width: "100%" }}>
          <h5 className="strDrink">{strDrink}</h5>
          <hr />
          <div className="d-flex justify-content-between">
            <h5 className={styles.price}>${price * quantity}</h5>
            <div className="d-flex">
              <button
                className="btn btn-sm"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom right, #00FFFF, #00CED1, #008B8B)",
                  color: "#ffffff",
                }}
                onClick={handleRemoveItem}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <input
                type="text"
                style={{ width: "45px" }}
                className="form-control"
                value={quantity}
                readOnly
              />
              <button
                className="btn btn-sm"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom right, #00FFFF, #00CED1, #008B8B)",
                  color: "#ffffff",
                }}
                onClick={handleAddItem}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
              <button
                className="btn btn-sm"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom right, #FF4500, #FF0000, #FFA500)",
                  color: "#ffffff",
                }}
                onClick={handleRemoveAllItem}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </ListGroup.Item>
    </div>
  );
};

CartItem.propTypes = {
  drink: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }),
};

export default CartItem;
