import React, {useContext, useState} from 'react';
import {Context} from '../index';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useDocument} from 'react-firebase-hooks/firestore';
import Modal from '@material-ui/core/Modal';
import {Button, makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import styles from './FoodForm.module.css';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 10, 3,),
        margin: '0 auto'

    },
}));

function FoodForm() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [meat, setMeat] = useState();
    const [fish, setFish] = useState();
    const [vegetables, setVegetables] = useState();
    const [fruits, setFruits] = useState();
    const [bread, setBread] = useState();
    const [beer, setBeer] = useState();
    const [alcohol, setAlcohol] = useState();
    const [water, setWater] = useState();

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const doc = firestore.collection('food').doc(user.uid);
    const [enteredData, loading] = useDocument(doc);

    const saveFood = async () => {
        doc.set({
            meat: meat || 0,
            fish: fish || 0,
            vegetables: vegetables || 0,
            fruits: fruits || 0,
            bread: bread || 0,
            beer: beer || 0,
            alcohol: alcohol || 0,
            water: water || 0
        });
    };

    if (loading || enteredData.exists) {
        return null;
    }

    const renderForm = () => (
        <div style={modalStyle} className={classes.paper} id="simple-modal-title">
            <TextField id="outlined-basic"
                       className={styles.eachField}
                       label="meat"
                       variant="outlined"
                       type="number"
                       value={meat}
                       onChange={
                           (e) => setMeat(e.currentTarget.value)}
            />
            <TextField id="outlined-basic"
                       className={styles.eachField}
                       label="fish"
                       variant="outlined"
                       type="number"
                       value={fish}
                       onChange={(e) => setFish(e.currentTarget.value)}
            />
            <TextField id="outlined-basic"
                       className={styles.eachField}
                       label="carrot"
                       variant="outlined"
                       type="number"
                       value={vegetables}
                       onChange={(e) => setVegetables(e.currentTarget.value)}
            />
            <TextField id="outlined-basic"
                       className={styles.eachField}
                       label="vegetable"
                       variant="outlined"
                       type="number"
                       value={fruits}
                       onChange={(e) => setFruits(e.currentTarget.value)}
            />
            <TextField id="outlined-basic"
                       className={styles.eachField}
                       label="bread"
                       variant="outlined"
                       type="number"
                       value={bread}
                       onChange={(e) => setBread(e.currentTarget.value)}
            />
            <TextField id="outlined-basic"
                       className={styles.eachField}
                       label="beer"
                       variant="outlined"
                       type="number"
                       value={beer}
                       onChange={(e) => setBeer(e.currentTarget.value)}
            />
            <TextField id="outlined-basic"
                       className={styles.eachField}
                       label="alcohol"
                       variant="outlined"
                       type="number"
                       value={alcohol}
                       onChange={(e) => setAlcohol(e.currentTarget.value)}
            />
            <TextField id="outlined-basic"
                       className={styles.eachField}
                       label="water"
                       variant="outlined"
                       type="number" value={water}
                       onChange={(e) => setWater(e.currentTarget.value)}
            />
            <div className={styles.buttonWrap}>
                <div className={styles.buttonContainer}>
                    <Button variant={'contained'} color={'primary'} onClick={saveFood}>submit</Button>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Button variant={'contained'} color={'primary'} onClick={() => {
                setModalOpen(true);
            }}>enter data</Button>
            <Modal
                aria-labelledby="simple-modal-title"
                open={isModalOpen}
                onClose={() => {
                    setModalOpen(false);
                }}>
                {renderForm()}
            </Modal>
        </>
    );
}

export default FoodForm;