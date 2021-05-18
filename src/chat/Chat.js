import React, {useContext, useState} from 'react';
import {Context} from '../index';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Container} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import Loader from '../loader/Loader';
import styles from './Chat.module.css';

function Chat() {

    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt'));

    const sendMessage = async (e) => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue('');
    };

    const onEnterMessage = (e) => {
        if (e.keyCode === 13) {
            sendMessage();
        }
    };

    if (loading) {
        return <Loader/>;
    }

    return (
        <div className={styles.chatWrap}>
            <Container>
                <Grid
                    style={{height: window.innerHeight - 50, marginTop: 20}}
                    justify={'center'}
                    container
                    back={'white'}
                >
                    <div style={{width: '80%', height: '70vh', border: '1px solid black', overflowY: 'auto'}}>
                        {messages.map(message =>
                            <div className={styles.chatMessage} style={{
                                margin: 10,

                                marginLeft: user.uid === message.uid ? 'auto' : '10',
                                width: 'fit-content',
                                padding: 10
                            }}>
                                <Grid container>
                                    <Avatar src={message.photoURL}/>
                                    <div className={styles.name}>{message.displayName}</div>
                                </Grid>
                                <div className={styles.message}>{message.text}</div>
                            </div>)}
                    </div>
                    <Grid
                        container
                        direction={'column'}
                        alignItems={'flex-end'}
                        style={{width: '80%'}}

                    >
                        <TextField variant={'filled'}
                                   fullWidth
                                   rowsMax={2}
                                   value={value}
                                   onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => onEnterMessage(e)}/>
                        <br/>
                        <Button onClick={sendMessage} variant={'contained'} color={'secondary'}>send</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Chat;





