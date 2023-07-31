import { Button, Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import useDrinks from "../../hooks/useDrinks";
import styles from "./index.module.css";
import useCart from "../../hooks/useCart";
import favoriteOneImage from '../../../public/favorite1.png'
import favoriteTwoImage from '../../../public/favorite2.png'
import { types } from "../../types";
import Swal from 'sweetalert2'
import useUser from "../../hooks/useUser";

const DrinkCard = ({ drink }) => {
  const { strDrinkThumb, strDrink, idDrink } = drink;
  const { handleDrinkIdClick } = useDrinks();
  const {handleToggleFavorite, favorites, user} = useUser()

  const { dispatch } = useCart();

  const handleAddCart = () => {
    dispatch({
      type: types.addItemToCart,
      payload: drink,
    });

    Swal.fire({
      title: 'Bebida agregada al carrito.',
      icon: "success",
      width: 600,
      padding: '5em',
      color: '#000000',
      showConfirmButton: false,
      timer: 2000,
      background: 'url(../../../public/cheers.gif)',
    })
  };

  const handleFavorite = () => {
    user ?
    handleToggleFavorite(idDrink)
    :
    Swal.fire({
      title: "Tenés que estar logueado",
      icon: "error",
      width: 600,
      color: '#ffffff',
      padding: '5em',
      showConfirmButton: false,
      timer: 6000,
      background: 'url(../../../public/echando.gif)',
    })
  }

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={strDrinkThumb}
          alt={`Imagen de ${strDrink}`}
        />
        <Card.Body>
          <Card.Title className={styles.strDrink}>{strDrink}</Card.Title>
          <a onClick={handleFavorite}>
            {
              favorites.includes(idDrink) ?
              <img src={favoriteTwoImage} alt="Imagen de un cóctel lleno" className={styles.favoriteTwoImage} />
              :
              <img src={favoriteOneImage} alt="Imagen de un cóctel vacío" className={styles.favoriteOneImage} />
            }
            </a>
          <Button
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, #FF00FF, #8A2BE2, #4B0082)",
              color: "#ffffff",
            }}
            className="w-100 text-uppercase mt-2"
            onClick={() => {
              handleDrinkIdClick(idDrink);
            }}
          >
            <i className="fa-solid fa-martini-glass" style={{ color: "#ffffff" }}></i> Ver bebida
          </Button>
          <Button
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, #00FFFF, #00CED1, #008B8B)",
              color: "#ffffff",
            }}
            className="w-100 text-uppercase mt-2"
            onClick={handleAddCart}
          >
            <i className="fa-solid fa-cart-shopping" style={{ color: "#ffffff" }}></i> Agregar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

DrinkCard.propTypes = {
  drink: PropTypes.object.isRequired,
  strDrinkThumb: PropTypes.string.isRequired,
  strDrink: PropTypes.string.isRequired,
};

DrinkCard.defaultProps = {
  strDrinkThumb:
    "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg",
  strDrink: "Nombre de la bebida",
};

export default DrinkCard;
