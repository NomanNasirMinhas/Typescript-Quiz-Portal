import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Doughnut } from 'react-chartjs-2';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from "react-router-dom";
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '*':{
      fontFamily: 'Bree Serif',
    },
    alignContent: 'center',
    margin: 'auto',
    width: "80%",
    height: "80%",
    backgroundColor: "#EAEDED98"
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      backgroundColor: "#00B7FC80"
    },

  },
  button: {
    alignSelf: 'center',
    float: 'right',
    margin: 'auto',
  },

}));

export default function Result() {
  let history = useHistory();
  const classes = useStyles();
  var name = localStorage.getItem('name');
  var score = Number(localStorage.getItem('score'));
  var nulls = Number(localStorage.getItem('null'));
  var wrong = 30 - (score + nulls);
  var percent = (score / (score + wrong))*100 ;


    var data = {
      datasets: [{
        data: [
          score,
          wrong,
          nulls,
        ],
        backgroundColor: [
          '#1ABC9C',
          '#EC7063',
          '#DAF7A6',
        ],
        label: 'Quiz Result'
      }],
      labels: [
        'Right Answers',
        'Wrong Answers',
        'Answer Unavailable',
      ]
    };
   var options = {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Quiz Result'
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    };



return (
  <div className={classes.root}>
<h1>Quiz Result</h1>
    <h2>Name = {name}</h2>
<h2>Perccentage = {percent.toString().slice(0, 4)} %</h2>
    <div >
      <Doughnut data={data} options={options} />
    </div>
    <div style={{margin : '30px'}}>
    <Button variant="contained"  color="primary" onClick={()=> {history.push('/')}}>
          Go Back
      </Button>
    </div>
  </div>
);
}
