import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Badge } from "react-bootstrap";
import { render } from 'react-dom';

const QuestionCount = (props) => {
    return(
        <h4>
            <Badge variant = "info">
                <span>Question {props.counter}</span> of <span>{props.total}</span>
            </Badge>
        </h4>
    );
}

QuestionCount.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  };
  
  export default QuestionCount;