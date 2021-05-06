import React from 'react'
import styles from './Navigation.module.css'

function Navigation() {
    return  (
        <div className={styles.navigation}>
            <a href="">food tracker</a>
            <a href="">people tracker</a>
            <a href="">timer</a>
            <a href="">log in</a>
        </div>
    )
}

export default Navigation