import styles from "./index.module.css";
import CartCanvas from "../CartCanvas";
import { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import headerImage from "../../../public/header.jpg";
import cartImage from "../../../public/cart.jpeg";
import useCart from "../../hooks/useCart";

export const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);
  const {cart} = useCart();

  return (
    <div className={styles.headerContainer}>
      <header className={`d-flex justify-content-end ${styles.header}`}>
        <div className={styles["image-container"]}>
          <img src={headerImage} alt="" />
          <h1 className="neon linear-gradient(to bottom right, #B98AFF, #FF00FF)">
            Search Drinks
          </h1>
        </div>
        <Button
          variant="outline-light"
          style={{
            paddingRight: "0px",
            height: "14.75px",
            paddingLeft: "0px",
            paddingTop: "0px",
            paddingBottom: "0px",
            borderRightWidth: "0px",
            borderLeftWidth: "0px",
          }}
          onClick={handleShowCart}
        >
          <div className={styles.cartAndBadge}>
            <img src={cartImage} alt="" className={styles.cartImage} />
            <Badge bg="danger">{cart.length} </Badge>
          </div>
        </Button>
        <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart} />
      </header>
    </div>
  );
};
