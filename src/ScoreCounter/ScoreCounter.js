import React from 'react';
import classes from './ScoreCounter.module.css';


const scoreCounter = (props) => {
    return (
        <div className={classes.ScoreCounter}>
            <p>Total Score: {props.userScore}</p>
        </div>
    )   
}


export default scoreCounter;