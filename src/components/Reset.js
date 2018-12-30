import React from 'react';
import styled from 'styled-components';

export default class Reset extends React.Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
    }
    reset() {
        this.props.onReset();
    }
    render() {
        return (
            <Button onClick={this.reset}>
                Reset
            </Button>
        );
    }
}

const Button = styled.button`
  background: red;
  color: white;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/b/bc/Refresh_icon.png');
  background-size: 15px 15px;
  background-position: 33% 50%;
  background-repeat:no-repeat;
  border: 2px solid red;
  border-radius: 2px;
  height: 30px;
  width: 200px;
  margin: 2px;
`;