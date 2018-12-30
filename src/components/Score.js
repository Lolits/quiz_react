import React from 'react';

export default class Score extends React.Component {
    render() {
        let msg ="";
        if(this.props.score < 5){
            msg = `Your score is ${this.props.score}. Keep trying, you can do better`;
        } else if (this.props.score < 8){
            msg = `Your score is ${this.props.score}. Not bad at all`
        } else {
            msg = `Congratulations, your score is ${this.props.score}. You're awesome`;
        }
        return (
            <div>
                {msg}
            </div>
        );
    }
}