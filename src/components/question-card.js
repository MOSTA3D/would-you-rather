import React from "react";

class QuestionCard extends React.Component{
    render(){
        return(
            <div>
                <h3> User name </h3>
                <div>
                    <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="question card avatar" />
                    <div id="answer-form">
                        <h2>Would you rather ...</h2>
                        <input type="radio" name="answer" />
                        <input type="radio" name="answer" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionCard;