import { Image, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const CartItem = ({ drink }) => {
  const { strDrink, strDrinkThumb, price, quantity } = drink;

  return (
    <div>
      <ListGroup.Item className="d-flex gap-4 my-2">
        <Image src={strDrinkThumb} width={"80px"} />
        <div style={{ width: "100%" }}>
          <h5 className={styles.strDrink}>{strDrink}</h5>
          <hr />
          <div className="d-flex justify-content-between">
            <h5 className={styles.price}>${price}</h5>
            <div className="d-flex">
              <button
                className="btn btn-sm"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom right, #00FFFF, #00CED1, #008B8B)",
                  color: "#ffffff",
                }}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <input
                type="text"
                style={{ width: "45px" }}
                className="form-control"
                value={quantity}
              />
              <button
                className="btn btn-sm"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom right, #00FFFF, #00CED1, #008B8B)",
                  color: "#ffffff",
                }}
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
