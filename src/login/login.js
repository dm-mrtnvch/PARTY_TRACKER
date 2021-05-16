import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {Context} from '../index';
import firebase from 'firebase';
import Container from '@material-ui/core/Container';

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