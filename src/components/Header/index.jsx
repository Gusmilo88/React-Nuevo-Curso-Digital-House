import styles from './index.module.css'
import CartCanvas from '../CartCanvas';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import headerImage from '../../../public/header.jpg';
import cartImage from '../../../public/cart.jpeg';

export const Header = () => {

    const [showCart, setShowCart] = useState(false);

    const handleShowCart = () => setShowCart(true)
    const handleCloseCart = () => setShowCart(false)

    return (
        <div className={styles.headerContainer}>
      <header className={`d-flex justify-content-end ${styles.header}`}>
        <div className={styles['image-container']}>
          <img src={headerImage} alt="" />
          <h1 className='neon linear-gradient(to bottom right, #B98AFF, #FF00FF)'>Search Drinks</h1>
        </div>
        <Button variant='outline-light' onClick={handleShowCart}>
          <img src={cartImage} alt="" className={styles.cartImage} />
        </Button>
      </header>
      <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart} />
    </div>
    )
}

