import styles from './index.module.css'

export const Header = () => {
    return (
        <header className={`py-5 ${styles.header}`}>
            <h1 className='neon'>Search Drinks</h1>
        </header>
    )
}

