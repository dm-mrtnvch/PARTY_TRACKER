import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyBBRa7t2wMG07DwLsXiVPrpAQb0LXsTeok",
    authDomain: "party-4f69b.firebaseapp.com",
    projectId: "party-4f69b",
    storageBucket: "party-4f69b.appspot.com",
    messagingSenderId: "788392000800",
    appId: "1:788392000800:web:580bdf3e24325aeecaab45",
    measurementId: "G-8MDV2MSS5B"
});

export const Context = createContext('null');
const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        firestore,
        auth
    }}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Context.Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
