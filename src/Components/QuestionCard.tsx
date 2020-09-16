import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { quizParam } from './../types/apiTypes';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';


const SimplePaper: React.FC<quizParam> = ({ question, answers, correct_answer, callback }) => {
    let [currentStep, setCurrentStep] = useState(0)

    const useStyles = makeStyles((theme) => ({
        root: {
            '*':{
                fontFamily: 'Bree Serif',
              },
            // alignSlef: 'center',
            margin: 'auto',
            // display: 'flex',
            // flexWrap: 'wrap',
            // '& > *': {
            // margin: theme.spacing(1),
            width: "70%",
            height: "60%",
            backgroundColor: "#00B7FC80"
            // },
        },
        formControl: {
            margin: theme.spacing(3),
        },
        button: {
            margin: theme.spacing(1, 1, 0, 0),
            backgroundColor: "#00B7FC",
            color: 'white',
            fontWeight: 'bold'
        },
        Cancelbutton: {
            margin: theme.spacing(1, 1, 0, 0),
            backgroundColor: "#EC7063",
            color: 'white',
            fontWeight: 'bold'
        },
        options: {
            color: 'white',
            fontWeight: 'bold'
        },
    }));

    let history = useHistory();
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    // let [selectedAns, setSelectedAns] = useState("");
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event: any) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setValue(event.target.value);
        var score = localStorage.getItem('score');
        var newScore = Number(score);
        var nulls = localStorage.getItem('null');
        var newNulls = Number(score);
        console.log(value);
        if (value == null || value === '') {
            alert('Please Choose an Option')
        }
        else {
            if (correct_answer == null) {
                newNulls++;
                console.log("Null Value", newNulls);
            }
            if (value === correct_answer) {
                // setHelperText('You got it!');
                // setError(false);
                newScore++;
            }
            else {
                // setHelperText('Sorry, wrong answer!');
                // setError(true);
            }
            localStorage.setItem('score', newScore.toString());
            localStorage.setItem('null', newNulls.toString());
            callback(true)
        }


    };

    const classes = useStyles();
    const qKeys: string[] = []

    Object.keys(answers).forEach(key => {
        qKeys.push(key)
    });

    return (
        <div className={classes.root}>

            <Paper className={classes.root} elevation={3} >
                <h3>{question}</h3>
                <form onSubmit={handleSubmit}>
                    <FormControl component="fieldset" error={error} className={classes.formControl}>
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                            {
                                qKeys.map((key) => {
                                    if (answers[key] != null)
                                        return (
                                            <FormControlLabel className={classes.options} value={key} control={<Radio />} label={answers[key]} />
                                        )
                                })}

                        </RadioGroup>
                        <FormHelperText>{helperText}</FormHelperText>
                    </FormControl>
                </form>
                <div>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={handleSubmit}>
                        Next Question
                        </Button>
                    <Button variant="outlined" color="primary" className={classes.Cancelbutton} onClick={()=>{history.push('/')}}>
                        Cancel Quiz
                        </Button>
                </div>
            </Paper>
            {/* <Paper />
      <Paper elevation={3} /> */}
        </div>
    );
}

export default SimplePaper;
