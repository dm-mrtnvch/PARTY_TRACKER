import React, {useEffect, useRef, useState} from 'react';
import styles from './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Timer from './timer/Timer';
import Registration from './registration/Registration';
import Statistics from './statistics/Statistics';
import {Provider} from 'react-redux';
import {store} from './store';


function App() {
    return (
        <Provider store={store}>
            <Timer/>
            <Main/>
            <Statistics/>
            <Registration/>
        </Provider>
    )
}

export default App;
