import React, {useContext, useEffect} from 'react';
import styles from './Statistics.module.css'
import {Doughnut} from 'react-chartjs-2';
import {useDispatch, useSelector} from 'react-redux';
import {loadStatisticsAC} from './statistics-actions'
import {ageStatistics, genderStatistics, levelStatistics} from './statistics-presenter'
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {Context} from '../index';

function Statistics() {

    const {firestore} = useContext(Context);
    const [data, loading] = useCollectionData(
        firestore.collection('data')
    )

    if (loading) {
        return 'LOADING';
    }

    return (
        <div className={styles.wrap}>
            <Doughnut data={ageStatistics(data)}/>
            <Doughnut data={genderStatistics(data)}/>
            <Doughnut data={levelStatistics(data)}/>
            {/*<div className={styles.statisticsContainer}>*/}
            {/*    <div className={styles.eachDoughnut}>*/}
            {/*        <Doughnut data={ageStatistics(data)}/>*/}
            {/*    </div>*/}
            {/*    <div className={styles.eachDoughnut}>*/}
            {/*        <Doughnut data={genderStatistics(data)}/>*/}
            {/*    </div>*/}
            {/*    <div className={styles.eachDoughnut}>*/}
            {/*        <Doughnut data={levelStatistics(data)}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Statistics