import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import {Context} from '../index';
import firebase from 'firebase';

const Login = () => {

    const {auth} = useContext(Context)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider
        const {user} = await auth.signInWithPopup(provider)
        console.log(user);
    }

    return (
        <Button onClick={login} variant={'contained'} color={'primary'}>
            Sign in with Google
        </Button>
    );
};

export default Login;