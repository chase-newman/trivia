import React from 'react';

const result = (props) => {
    return (
        <div className="col-md-8">
            {(props.correctAnswer.includes(props.userAnswer)) ? <h1 id="green">Correct</h1> 
                : <h1 id="red">{props.incorrect}</h1> 
            }
        </div>
    );
}


export default result;