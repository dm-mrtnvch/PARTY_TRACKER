import React, {useState} from 'react'
import styles from './Registration.module.css'
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import {makeStyles} from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';

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

    const classes = useStyles()

    const [value, setValue] = useState('')

    const onChangeAgeHandler = (e) => {
        setValue(e.target.value)
    }

    const onChangeGenderHandler = (e) => {
        setValue(e.target.value)
    }

    const onChangeStudyLevelHandler = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.RegistrationContainer}>
                <FormControl variant={'outlined'}  >
                    <InputLabel>name</InputLabel>
                <Input type="text"/>
                    </FormControl >
                <FormControl variant={'outlined'} className={classes.formControl} >
                    <InputLabel>age</InputLabel>
                    <Select
                        labelId='select-demo'
                        id='florida-select'
                        displayEmpty
                        value={value}
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
                        value={value}
                        onChange={onChangeGenderHandler}
                        className={classes.selectedEmpty}
                    >
                        <MenuItem>man</MenuItem>
                        <MenuItem>woman</MenuItem>
                        <MenuItem>not decided yet</MenuItem>
                    </Select>
                    <FormHelperText>choose your gender</FormHelperText>
                </FormControl>
                <FormControl variant={'outlined'} className={classes.formControl}>
                    <InputLabel>study level</InputLabel>
                    <Select
                        labelId='select-demo'
                        id='florida-select'
                        displayEmpty
                        value={value}
                        onChange={onChangeStudyLevelHandler}
                        className={classes.selectedEmpty}
                    >
                        <MenuItem value={'raz'}>monday</MenuItem>
                        <MenuItem value={'dva'}>tuesday</MenuItem>
                        <MenuItem value={'tri'}>wednesday</MenuItem>
                        <MenuItem value={'tri'}>thursday</MenuItem>
                        <MenuItem value={'tri'}>friday</MenuItem>
                        <MenuItem value={'tri'}>saturday</MenuItem>
                        <MenuItem value={'tri'}>already work</MenuItem>

                    </Select>
                    <FormHelperText>choose your study level</FormHelperText>
                </FormControl>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Registration