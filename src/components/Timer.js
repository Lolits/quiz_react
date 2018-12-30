import React from 'react';

export default class Timer extends React.Component {
    componentDidMount() {
        this.interval = setInterval(() => this.props.onTimeChange(),
            1000);
    }
    componentDidUpdate() {
        if (this.props.finished === true) {
            clearInterval(this.interval);
        }
        if (this.props.reseted === true) {
            clearInterval(this.interval);
            this.interval = setInterval(() => this.props.onTimeChange(),
                1000);
        }
    }
    render() {
        let msg = "";
        if (this.props.time <= 0) {
            msg = "The timer has finished";
        } else if (this.props.finished === true) {
            msg = `You finished with ${this.props.time} seconds to spare`;
        } else {
            msg = `You have ${this.props.time} seconds left to answer all the questions`;
        }
        return (
            <div>
                <p>{msg}</p>
            </div>
        )
    }
}