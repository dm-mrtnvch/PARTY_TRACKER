import React, {useContext, useState} from 'react';
import styles from './Registration.module.css'
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import {makeStyles} from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import {Context} from '../index';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Button} from '@material-ui/core';
import {useDocument} from 'react-firebase-hooks/firestore';

const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 200,
            color: "primary"
        },
        selectedEmpty: {
            marginTop: theme.spacing(2),
            color: 'secondary'

        }
    }
))





function Registration() {

    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);

    const doc = firestore.collection('data').doc(user.uid);

    const [enteredData, loading] = useDocument(doc);

    const saveData = async() => {
        doc.set({
            age,
            gender,
            level
        })
    }

    const classes = useStyles()

    const [age, setAge] = useState('18')
    const [gender, setGender] = useState('man')
    const [level, setLevel] = useState('monday')

    const onChangeAgeHandler = (e) => {
        setAge(e.target.value)
    }

    const onChangeGenderHandler = (e) => {
        setGender(e.target.value)
    }

    const onChangeStudyLevelHandler = (e) => {
        setLevel(e.target.value)
    }

    if (loading || enteredData.exists) {
        return null;
    }

    return (
            <div className={styles.wrap}>
                <div className={styles.RegistrationContainer}>
                    <FormControl variant={'outlined'} className={classes.formControl} >
                        <InputLabel>age</InputLabel>
                        <Select
                            labelId='select-demo'
                            id='florida-select'
                            displayEmpty
                            value={age}
                            onChange={onChangeAgeHandler}
                            className={classes.selectedEmpty}
                        >
                            {/*<MenuItem value={''}>Empty</MenuItem>*/}
                            <MenuItem value={'18'}>under 18</MenuItem>
                            <MenuItem value={'23'}>18 - 23</MenuItem>
                            <MenuItem value={'28'}>24 - 28</MenuItem>
                            <MenuItem value={'33'}>29 - 33</MenuItem>
                            <MenuItem value={'39'}>34 - 39</MenuItem>
                            <MenuItem value={'40'}>40+</MenuItem>
                        </Select>
                        <FormHelperText>choose your age</FormHelperText>
                    </FormControl>
                    <FormControl variant={'outlined'} className={classes.formControl}>
                        <InputLabel>gender</InputLabel>
                        <Select
                            labelId='select-demo'
                            id='florida-select'
                            displayEmpty
                            value={gender}
                            onChange={onChangeGenderHandler}
                            className={classes.selectedEmpty}
                        >
                            <MenuItem value={'man'}>man</MenuItem>
                            <MenuItem value={'woman'}>woman</MenuItem>
                            <MenuItem value={'unknown'}>not decided yet</MenuItem>
                        </Select>
                        <FormHelperText>choose your gender</FormHelperText>
                    </FormControl>
                    <FormControl variant={'outlined'} className={classes.formControl}>
                        <InputLabel>study level</InputLabel>
                        <Select
                            labelId='select-demo'
                            id='florida-select'
                            displayEmpty
                            value={level}
                            onChange={onChangeStudyLevelHandler}
                            className={classes.selectedEmpty}
                        >
                            <MenuItem value={'monday'}>monday</MenuItem>
                            <MenuItem value={'tuesday'}>tuesday</MenuItem>
                            <MenuItem value={'wednesday'}>wednesday</MenuItem>
                            <MenuItem value={'thursday'}>thursday</MenuItem>
                            <MenuItem value={'friday'}>friday</MenuItem>
                            <MenuItem value={'saturday'}>saturday</MenuItem>
                            <MenuItem value={'finished'}>finished</MenuItem>

                        </Select>
                        <FormHelperText>choose your study level</FormHelperText>
                    </FormControl>
                    <Button onClick={saveData}>save</Button>
                </div>
            </div>
    )
}

export default Registration