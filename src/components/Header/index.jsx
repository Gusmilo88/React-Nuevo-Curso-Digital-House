import styles from './index.module.css'
import headerImage from '../../../public/header.jpg';

export const Header = () => {
    return (
        <header className={` ${styles.header}`}>
            <div className={styles['image-container']}>
                <img src={headerImage} alt="" />
                <h1 className='neon linear-gradient(to bottom right, #B98AFF, #FF00FF)'>Search Drinks</h1>
            </div>
        </header>
    )
}

