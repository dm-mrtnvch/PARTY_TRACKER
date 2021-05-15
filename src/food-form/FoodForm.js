import React, {useContext, useState} from 'react';
import {Context} from '../index';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useDocument} from 'react-firebase-hooks/firestore';
import Modal from '@material-ui/core/Modal';
import {Button, makeStyles} from '@material-ui/core';


    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            margin: 'auto'
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




    <div className={classes.paper}>
            <input type="number" value={meat} onChange={(e) => setMeat(e.currentTarget.value)}/>
            <input type="number" value={fish} onChange={(e) => setFish(e.currentTarget.value)}/>
            <input type="number" value={vegetables} onChange={(e) => setVegetables(e.currentTarget.value)}/>
            <input type="number" value={fruits} onChange={(e) => setFruits(e.currentTarget.value)}/>
            <input type="number" value={bread} onChange={(e) => setBread(e.currentTarget.value)}/>
            <input type="number" value={beer} onChange={(e) => setBeer(e.currentTarget.value)}/>
            <input type="number" value={alcohol} onChange={(e) => setAlcohol(e.currentTarget.value)}/>
            <input type="number" value={water} onChange={(e) => setWater(e.currentTarget.value)}/>
            <button onClick={saveFood}>submit</button>
        </div>
    );

    return (
        <>
            <Button variant={'contained'} onClick={() => {
                setModalOpen(true);
            }}>Modal</Button>
            <Modal
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