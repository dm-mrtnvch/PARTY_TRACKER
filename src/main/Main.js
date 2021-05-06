import React from 'react'
import styles from './Main.module.css'
import Navigation from '../nav/Navigation';


function Main() {


    const food = {
        meat: {
            chicken: 5,
            notChicken: 6,
            fish: 8
        },
        frovoshi: {
            fruits: 24,
            vegetables: 525
        },
        drinks: {
            beer: 164,
            alcohol: 3857,
            water: 41
        },
        bread: {
            lavash: 582
        },
        sauce: {
            ketchunes: 2
        }
    }

    return (
        <>
            <Navigation/>
            <div className={styles.wrap}>
                <div className={styles.mainContainer}>
                    <h2>FOOD STACK</h2>
                    <section className={styles.icons}>
                        <i className="fas fa-drumstick-bite">{food.meat.chicken}</i>
                        <i className="fas fa-fish"></i>
                        <i className="fas fa-carrot"></i>
                        <i className="fas fa-apple-alt"></i>
                        <i className="fas fa-bread-slice"></i>
                        <i className="fas fa-beer"></i>
                        <i className="fas fa-wine-bottle"></i>
                        <i className="fas fa-tint"></i>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Main