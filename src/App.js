import React, {useEffect, useRef, useState} from 'react';
import styles from './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Timer from './timer/Timer';
import Registration from './registration/Registration';
import Statistics from './statistics/Statistics';

function App() {
    return (
        <>
            <Timer/>
            <Main/>
            <Statistics/>
            <Registration/>

        </>
    )
}

export default App;
