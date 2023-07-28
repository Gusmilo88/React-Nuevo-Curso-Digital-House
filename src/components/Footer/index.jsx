import styles from "./index.module.css";
import logoImage from "../../../public/logo.png";


const Footer = () => {
  return (
    <footer className={`p-4 ${styles.footer}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <a href="/" className="d-flex align-items-center">
            <img src={logoImage} width="50px" className={`${styles.logoFooter}`} />
              <span className="ms-3 h5 font-weight-bold">Drinks</span>
            </a>
            <div className="mt-5 d-flex">
              <a href="/" className="me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <p className="h5 mb-4 font-weight-bold">Formar</p>
            <ul className="list-unstyled">
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <p className="h5 mb-4 font-weight-bold">Products</p>
            <ul className="list-unstyled">
              <li>
                <a href="/">Windframe</a>
              </li>
              <li>
                <a href="/">Loop</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <p className="h5 mb-4 font-weight-bold">Help</p>
            <ul className="list-unstyled">
              <li>
                <a href="/login">Logueate</a>
              </li>
              <li>
                <a href="/register">Registrate</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center mt-5">
            <small>&copy; Drinks, 2023. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

