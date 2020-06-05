import React, { Fragment } from 'react';
import {Jumbotron} from 'react-bootstrap';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import NavButton from './NavButton';
import axios from 'axios';

class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          questions: {},
          questionsCount: 0,
          question: '',
          answerOptions: [],
          counter: 0,
          questionIndex: 0,
          answer: '',
          result: {},
          handleAnswerSelected:''
        };    

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
      }

    componentDidMount() {
      axios.get('https://djxarstcue.execute-api.ap-southeast-1.amazonaws.com/dev/questions?examOrginator=pitman-quiz&examName=cntry_complete&numOfQuestions=10')
      .then(response => {
        this.setState({
          questions: response.data.questions,
          questionsCount: response.data.questions.length,
          question: response.data.questions[0].description,
          answerOptions: response.data.questions[0].options,
          counter: 1,
          questionIndex: 0
        })});
    }

    handleAnswerSelected(event) {
      this.setUserAnswer(event.currentTarget.value);
      //this.state.questionIndex + 1 < this.state.questions.length && setTimeout(() => this.setNextQuestion(), 300)
    }

    setUserAnswer(answer) {
      this.setState((state) => ({
        result:{
            ...state.result, 
            [state.questionIndex]: answer 
          },
        answer: answer
      }), () => {console.log(this.state.result);});
    }

      setNextQuestion() {
        const currentQuestionIndex = this.state.questionIndex + 1;
        this.setState({
          counter: this.state.counter + 1,
          questionIndex: currentQuestionIndex,
          question: this.state.questions[currentQuestionIndex].description,
          answerOptions: this.state.questions[currentQuestionIndex].options,
          answer: this.state.result[currentQuestionIndex] ? this.state.result[currentQuestionIndex] : ''
        });
      }

      setPreviousQuestion() {
        const currentQuestionIndex = this.state.questionIndex - 1;
        this.setState({
          counter: this.state.counter - 1,
          questionIndex: currentQuestionIndex,
          question: this.state.questions[currentQuestionIndex].description,
          answerOptions: this.state.questions[currentQuestionIndex].options,
          answer: this.state.result[currentQuestionIndex] ? this.state.result[currentQuestionIndex] : ''
        });
      }

      handleNextClick(event) {
        this.state.questionIndex + 1 < this.state.questions.length && setTimeout(() => this.setNextQuestion(), 200);
      }

      handlePreviousClick(event) {
        this.state.questionIndex - 1 >= 0 && setTimeout(() => this.setPreviousQuestion(), 200);
      }

    render (){

        const event = this.handleAnswerSelected;
        const answer = this.state.answer;

        function renderAnswerOptions(key, event) {
            return (
              <AnswerOption
                key = {key.key}
                answerKey={key.key}
                answerContent={key.value}
                answer={answer}
                onAnswerSelected={event}
              />
            );
          }

        return(
         
            <Fragment>
              <Jumbotron className = "bg-white">

                  <QuestionCount counter={this.state.counter} total={this.state.questionsCount} />
                  <Question content = {this.state.question} />

                  <ul className="answerOptions">
                      {
                          this.state.answerOptions.map( function (item){ 
                              return renderAnswerOptions(item, event)
                          })
                      }
                  </ul>

                  <NavButton name={"previous"} value={"<< Previous"} onButtonClick={this.handlePreviousClick} />{' '}
                  <NavButton name={"next"} value={"Next >>"} onButtonClick={this.handleNextClick} />
                  
              </Jumbotron>
            </Fragment>
        );
    }

}

export default Quiz;