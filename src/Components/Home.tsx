import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from "react-router-dom";
import FormLabel from '@material-ui/core/FormLabel';
import './../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '*':{
      fontFamily: 'Bree Serif',
    },
    alignContent: 'center',
    margin: 'auto',
    width: "90%",
    height: "90%",
    paddingRight: '50px',
    paddingLeft: '50px',
    backgroundColor: "#00B7FC80"
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
    // float: 'right',
    margin: 'auto'
  },

}));

export default function Home() {

  const classes = useStyles();
  const [value, setValue] = React.useState('Linux');
  const [name, setName] = React.useState('');
  // const [number, setNumber] = React.useState(0);
  let history = useHistory();

  localStorage.clear();
  localStorage.setItem('name', name);
  localStorage.setItem('score', "0");
  localStorage.setItem('null', "0");


  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleName = (event: any) => {
    setName(event.target.value);
  };

  const submitForm = (event: any) => {

    if (name.length === 0) {
      alert("Please Provide Your Name")
    }

    else {
      // console.log(value)
      history.push(`/quiz/${value}`);
    }

  };

  return (
    <div className={classes.root}>
      <h1>Boot&Camp Quiz Portal</h1>
      <h2>Please Enter Your Name and Select Category of the Quiz You want to Give</h2>
      <div>
        <FormControl className={classes.root} component="fieldset" onSubmit={submitForm}>
          <TextField id="filled-basic" label="Enter Your Name Here" variant="filled" value={name} required onChange={handleName} />
          {/* <FormLabel component="legend">Quiz Options</FormLabel> */}
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="Linux" control={<Radio />} label="Linux" />
            <FormControlLabel value="DevOps" control={<Radio />} label="DevOps" />
            <FormControlLabel value="Networking" control={<Radio />} label="Networking" />
            <FormControlLabel value="Programming" control={<Radio />} label="Programming" />
            <FormControlLabel value="Cloud" control={<Radio />} label="Cloud" />
            <FormControlLabel value="Docker" control={<Radio />} label="Docker" />
            <FormControlLabel value="Kubernetes" control={<Radio />} label="Kubernetes" />
          </RadioGroup>
        </FormControl>
      </div>
      <div style={{marginTop: '50px'}}>
        <Button variant="contained" color="secondary" onClick={submitForm}>
          Start Quiz
      </Button>
      </div>



    </div>

  );
}
