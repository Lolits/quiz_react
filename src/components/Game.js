import React from 'react';
import styled from 'styled-components';

export default class Game extends React.Component {
    render() {
        let id = this.props.number + 1;
        let tips = <ul>There are no tips</ul>;
        if (this.props.question.tips.length > 0) {
            tips = this.props.question.tips.map((tip) =>
                <ul>{tip}</ul>
            );
        }
        return (
            <div>
                <Img src={this.props.question.attachment.url} alt={this.props.question.attachment.filename} />
                <div>
                    <h3 bold>Question {id}</h3>
                    {this.props.question.question}
                    <Input type="text" placeholder="Type your answer here" value={this.props.question.userAnswer || ""} onChange={(e) => {
                        this.props.onQuestionAnswer(e.target.value);
                    }} />
                    <h3 bold>tips</h3>
                    <ul>{tips}</ul>
                </div>
            </div>
        );
    }
}

const Img = styled.img`
width: 350px;
height: 350px;
object-fit: contain;
border: 1px solid lightgrey;
margin: 2px;
`;
const Input = styled.input`
background: white;
color: black;
background-image: url('http://www.dekalbparkdistrict.com/upload/writing-icon.png');
background-size: 15px 15px;
background-position: left center; 
background-repeat:no-repeat;
border: none;
border-bottom: 2px solid red;
border-radius: 2px;
height: 30px;
width: 200px;
padding: 0px 17px;
margin: 2px;
outline: none;
resize: none;
`;