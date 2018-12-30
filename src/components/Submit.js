import React from 'react';
import styled from 'styled-components';

export default class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit() {
        this.props.onSubmit();
    }
    render() {
        let submitButton = <Button onClick={this.submit}>
            Submit
        </Button>
        if (this.props.finished === true) {
            submitButton = <Button notSelectable disabled onClick={this.submit}>
                Submit
        </Button>
        }
        return (
            <>
                {submitButton}
            </>
        );
    }
}

const Button = styled.button`
  background: ${props => props.notSelectable ? "lightgrey" : "red"};
  color: ${props => props.notSelectable ? "grey" : "white"};
  background-image: url('https://image.flaticon.com/icons/png/512/60/60731.png');
  background-size: 15px 15px;
  background-position: 30% 50%; 
  background-repeat:no-repeat;
  border: 2px solid ${props => props.notSelectable ? "lightgrey" : "red"};
  border-radius: 2px;
  height: 30px;
  width: 200px;
  margin: 2px;
`;