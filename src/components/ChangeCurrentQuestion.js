import React from 'react';
import styled from 'styled-components';

export default class ChangeCurrentQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.previousQuestion = this.previousQuestion.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }
    previousQuestion() {
        this.props.onQuestionChange(this.props.current - 1);
    }
    nextQuestion() {
        this.props.onQuestionChange(this.props.current + 1);
    }
    render() {
        let previousButton = <Button notSelectable previous disabled>
            Previous
        </Button>;
        let nextButton = <Button notSelectable next disabled>
            Next
        </Button>;
        if (this.props.questions != null && this.props.current > 0 && this.props.finished === false) {
            previousButton = <Button previous onClick={this.previousQuestion}>
                Previous
            </Button>
        }
        if (this.props.questions != null && this.props.current < this.props.questions.length - 1 && this.props.finished === false) {
            nextButton = <Button next onClick={this.nextQuestion}>
                Next
            </Button>
        }
        return (
            <>
                {previousButton}
                {nextButton}
            </>
        );
    }
}

const Button = styled.button`
  background: ${props => props.notSelectable ? "lightgrey" : "red"};
  color: ${props => props.notSelectable ? "grey" : "white"};
  background-image: url(${props => props.previous ? "http://downloadicons.net/sites/default/files/a-song-on-your-player-icon-63788.png" : "http://www.free-icons-download.net/images/next-track-button-icon-63790.png"});
  background-size: 15px 15px;
  background-position: ${props => props.previous ? "30%" : "35%"} 50%;
  background-repeat:no-repeat;
  border: 2px solid ${props => props.notSelectable ? "lightgrey" : "red"};
  border-radius: 2px;
  height: 30px;
  width: 200px;
  margin: 2px;
`;