import React from 'react'
import styles from './Registration.module.css'

function Registration() {
    return (
        <div className={styles.wrap}>
            <div className={styles.RegistrationContainer}>
                <p>name</p>
                <input type="text"/>
                <p>age</p>
                <input type="number"/>
                <p>gender</p>
                <select name="" id="">
                    <option value="">man</option>
                    <option value="">woman</option>
                    <option value="">not decided yet</option>
                </select>
                <p>study level</p>
                <select name="" id="">
                    <option value="">monday</option>
                    <option value="">tuesday</option>
                    <option value="">wednesday</option>
                    <option value="">thursday</option>
                    <option value="">friday</option>
                    <option value="">saturday</option>
                    <option value="">hired</option>
                </select>
                <div>
                    <button>submit</button>
                </div>
            </div>
        </div>
    )
}

export default Registration