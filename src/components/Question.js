import React from 'react';
import PropTypes from 'prop-types';

const Question = (props) => {
    return (
        <h5>{props.content}</h5>
    );
}

Question.propTypes = {
    content: PropTypes.string.isRequired
  };
  
export default Question;