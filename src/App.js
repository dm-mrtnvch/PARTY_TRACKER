import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Timer from './timer/Timer';
import Registration from './registration/Registration';
import Statistics from './statistics/Statistics';
import Login from '../src/login/login';
import {Context} from './index';
import {useAuthState} from 'react-firebase-hooks/auth';
import Loader from './loader/Loader';
import FoodForm from './food-form/FoodForm';


function App() {

    const {auth} = useContext(Context);
    const [user, isLoading] = useAuthState(auth);

    const renderPage = () => (
        <>
            <Timer user={user}/>
            {
                user && (
                    <>
                        <Registration/>
                        <Main/>
                        <Statistics/>

                    </>
                )
            }
        </>
    );

    return isLoading ? <Loader/> : renderPage();

}

export default App;
