import styles from "./index.module.css";
import CartCanvas from "../CartCanvas";
import { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import headerImage from "../../../public/header.jpg";
import cartImage from "../../../public/cart.jpeg";
import userImage from "../../../public/user.png";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";

export const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);
  const { cart } = useCart();

  return (
    <div className={styles.headerContainer}>
      <header className={`d-flex justify-content-between align-items-center ${styles.header}`}>
        <div className={styles["image-container"]}>
          <img src={headerImage} alt="" />
          <h1 className="neon linear-gradient(to bottom right, #B98AFF, #FF00FF)">
            Search Drinks
          </h1>
        </div>
        <div className={`d-flex align-items-center ${styles.userAndCart}`}>
          <Link to={"/login"}>
            <img
              src={userImage}
              alt="Logo user"
              className={styles.userImage}
            />
          </Link>
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
              <img
                src={cartImage}
                alt="Logo carrito"
                className={styles.cartImage}
              />
              <Badge bg="danger">{cart.length} </Badge>
            </div>
          </Button>
        </div>
        <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart} />
      </header>
    </div>
  );
};
