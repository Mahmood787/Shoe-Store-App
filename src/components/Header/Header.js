import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'
import styles from './Header.module.css'
import SearchAppBar from './navBar'

export const Header = () => {
    return (
        <>
        <div className={styles.header}>
            <ul>
                <li>Join Us</li>
                <li> Icon</li>
                <li>Awsome Shoes</li>
            </ul>
            <ul className={styles.rightTopBar}>
                <li>Join Us</li>
                <li> Icon</li>
                <li>Awsome Shoes</li>
            </ul>
        </div>
        <SearchAppBar/>
        </>
    )
}
