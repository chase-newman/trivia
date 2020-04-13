import React from 'react';

const question = (props) => {
    return (
        <div className="col-md-8">
            <p id="question">{props.question}</p>
              <div className="input-group mb-3">
                <input
                  onChange={props.onChangeHandler}
                  type="text" 
                  className="form-control" 
                  placeholder="answer..." 
                  aria-label="answer" 
                  aria-describedby="basic-addon2" 
                  value={props.value} />
                <div className="input-group-append">
                  <button 
                    onClick={props.onClickHandler}
                    className="btn btn-outline-success" 
                    type="button">Submit</button>
                  <button
                    onClick={props.nextQuestionHandler}
                    className="btn btn-block btn-outline-danger">
                    Next Question</button>
                </div>
            </div>
        </div>
    );
}


export default question;