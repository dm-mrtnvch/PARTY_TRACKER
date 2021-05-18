import React, {useContext, useEffect, useRef, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './main/Main';
import Timer from './timer/Timer';
import Registration from './registration/Registration';
import Statistics from './statistics/Statistics';
import {Context} from './index';
import {useAuthState} from 'react-firebase-hooks/auth';
import Loader from './loader/Loader';
import Chat from './chat/Chat';

function App() {

    const {auth} = useContext(Context);
    const [user, isLoading] = useAuthState(auth);

    const renderPage = () => (
        <>
            <Timer user={user}/>
            {
                user && (
                    <>
                        <BrowserRouter>
                            <Registration/>
                            <Main/>
                            <Statistics/>
                            <Chat/>
                        </BrowserRouter>

                    </>
                )
            }
        </>
    );

    return isLoading ? <Loader/> : renderPage();
}

export default App;
