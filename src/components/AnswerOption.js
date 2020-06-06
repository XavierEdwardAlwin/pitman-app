import React from "react"; 
import PropTypes from "prop-types";

const AnswerOption = (props) => {
    return (
        <li className="answerOption" >
            <input
            type="radio"
            name="radioGroup"
            checked= {props.answerKey === props.answer}
            id={props.answerKey}
            value={props.answerKey}
            onChange={props.onAnswerSelected}
            />
            <label >
               &nbsp; {props.answerContent}
            </label>
        </li>
    );
  }

  AnswerOption.propTypes = {
    answerKey: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };
  
  export default AnswerOption;