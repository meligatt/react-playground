import './index.scss';
import React, { Component } from 'react';
import Alert from './components/Alert';

class Board extends Component{
  render() {
    return (
      <div className= "board-main">
        board code snippets
        <Alert />
      </div>
    );
  }

}
export default Board;
