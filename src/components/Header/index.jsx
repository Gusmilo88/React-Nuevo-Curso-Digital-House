import styles from "./index.module.css";
import CartCanvas from "../CartCanvas";
import { useState } from "react";
import { Badge } from "react-bootstrap";
import headerImage from "../../../public/header.jpg";
import logoImage from "../../../public/logo.png";
import cartImage from "../../../public/cart.jpeg";
import userImage from "../../../public/user.png";
import logInImage from "../../../public/login.png";
import logOutImage from "../../../public/logout.png";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

export const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const { cart } = useCart();
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={styles.headerContainer}>
      <header
        className={`d-flex justify-content-between align-items-center ${styles.header}`}
      >
        <div className={styles["image-container"]}>
          <img src={headerImage} alt="" />
          <h1 className="neon linear-gradient(to bottom right, #B98AFF, #FF00FF)">
            <a href="/" className="d-flex align-items-center">
              <img
                src={logoImage}
                alt=""
                className={styles.logoImage}
                style={{
                  height: "25vh",
                }}
              />
            </a>
          </h1>
        </div>
        <div className={`d-flex align-items-center ${styles.userAndCart}`}>
          {user ? (
            <div>
              <Link to={"/user/profile"}>
                <img
                  src={userImage}
                  alt="Logo user"
                  className={styles.imageBase}
                />
              </Link>
              <a onClick={handleLogout}>
                <img
                  src={logOutImage}
                  alt="Logo logOut"
                  className={styles.imageBase}
                />
              </a>
            </div>
          ) : (
            <Link to={"/login"}>
              <img
                src={logInImage}
                alt="Logo login"
                className={styles.imageBase}
              />
            </Link>
          )}

          <a onClick={handleShowCart}>
            <div className={styles.cartAndBadge}>
              <img
                src={cartImage}
                alt="Logo carrito"
                className={styles.imageBase}
              />
              <Badge bg="danger">{cart.length} </Badge>
            </div>
          </a>
        </div>
        <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart} />
      </header>
    </div>
  );
};
