import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import Score from './Score'
import ChangeCurrentQuestion from './ChangeCurrentQuestion'
import Submit from './Submit'
import Reset from './Reset'
import Timer from './Timer'
import { questionAnswer, submit, changeQuestion, reset, fetchQuestions, changeTimer } from '../redux/actions'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchQuestions());
  }
  componentDidUpdate() {
    if (this.props.resetting === true) {
      this.props.dispatch(fetchQuestions());
    } else if (this.props.timer === 0) {
      this.props.dispatch(submit(this.props.questions));
    }
  }
  render() {
    let main;
    if (this.props.errorFetching === true) {
      main = <p> An error has happened and it hasn't been possible to donwload the questions. Please, check that the <a href="https://quiz2019.herokuapp.com">quiz service</a> as well as the token provided are still operational. </p>
    } else if (this.props.isFetching === true) {
      main = <p> Loading questions... </p>
    } else if (this.props.finished === false) {
      main = <Game question={this.props.questions[this.props.currentQuestion]} number={this.props.currentQuestion} onQuestionAnswer={
        (answer) => {
          this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
        }
      } />;
    } else {
      main = <Score score={this.props.score} />;
    }
    return (
      <div>
        {main}
        <div>
          <p>
            <Submit finished={this.props.finished} onSubmit={
              () => {
                this.props.dispatch(submit(this.props.questions))
              }
            } />
            <ChangeCurrentQuestion questions={this.props.questions} current={this.props.currentQuestion} finished={this.props.finished} onQuestionChange={
              (index) => {
                this.props.dispatch(changeQuestion(index))
              }
            } />
            <Reset onReset={
              () => {
                this.props.dispatch(reset())
              }
            } />
          </p>
          <Timer time={this.props.timer} finished={this.props.finished} reseted={this.props.resetting} onTimeChange={
            () => {
              this.props.dispatch(changeTimer())
            }
          } />;
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}
export default connect(mapStateToProps)(App);