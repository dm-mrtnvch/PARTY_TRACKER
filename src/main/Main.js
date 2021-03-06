import React, {useContext} from 'react';
import styles from './Main.module.css';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {Context} from '../index';
import {sumBy} from 'lodash';
import FoodForm from '../food-form/FoodForm';

function Main() {

    const {firestore} = useContext(Context);
    const [food, loading] = useCollectionData(
        firestore.collection('food'));

    if (loading) {
        return 'LOADING';
    }

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.mainContainer}>
                    <h2>FOOD STACK</h2>
                    <section className={styles.icons}>

                        <div className={styles.eachIcon}>
                            <i className="fas fa-drumstick-bite"></i>
                            <span>{sumBy(food, d => Number(d.meat))}</span>
                            <span>kg</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-fish"></i>
                            <span>{sumBy(food, d => Number(d.fish))}</span>
                            <span>kg</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-carrot"></i>
                            <span>{sumBy(food, d => Number(d.vegetables))}</span>
                            <span>kg</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-apple-alt"></i>
                            <span>{sumBy(food, d => Number(d.fruits))}</span>
                            <span>kg</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-bread-slice"></i>
                            <span>{sumBy(food, d => Number(d.bread))}</span>
                            <span>pc</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-beer"></i>
                            <span>{sumBy(food, d => Number(d.beer))}</span>
                            <span>ltr</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-wine-bottle"></i>
                            <span>{sumBy(food, d => Number(d.alcohol))}</span>
                            <span>ltr</span>
                        </div>
                        <div className={styles.eachIcon}>
                            <i className="fas fa-tint"></i>
                            <span>{sumBy(food, d => Number(d.water))}</span>
                            <span>ltr</span>
                        </div>
                        <div>
                            <FoodForm/>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Main;