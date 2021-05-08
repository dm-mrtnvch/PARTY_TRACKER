import React from 'react'
import styles from './Main.module.css'
import Navigation from '../nav/Navigation';


function Main() {


    const food = {
        meat: {
            chicken: 5,
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
            loaf: 582
        },
        sauce: {
            ketchunes: 2
        }
    }

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.mainContainer}>
                    <h2>FOOD STACK</h2>
                    <section className={styles.icons}>

                        <div className={styles.eachIcon}>
                            <i className="fas fa-drumstick-bite"></i>
                            <span>{food.meat.chicken}</span>
                            <span>kg</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-fish"></i>
                            <span>{food.meat.fish}</span>
                            <span>kg</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-carrot"></i>
                            <span>{food.frovoshi.vegetables}</span>
                            <span>kg</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-apple-alt"></i>
                            <span>{food.frovoshi.fruits}</span>
                            <span>kg</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-bread-slice"></i>
                            <span>{food.bread.loaf}</span>
                            <span>pc</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-beer"></i>
                            <span>{food.drinks.beer}</span>
                            <span>ltr</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-wine-bottle"></i>
                            <span>{food.drinks.alcohol}</span>
                            <span>ltr</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-tint"></i>
                            <span>{food.drinks.beer}</span>
                            <span>ltr</span>
                        </div>












                    </section>
                </div>
            </div>
        </>
    )
}

export default Main