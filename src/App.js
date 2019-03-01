import React, { Component } from 'react';
import './App.css';

import openSocket from 'socket.io-client';
import Board from './Board';
const socket = openSocket('http://localhost:3001');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sessionToken: null,
      gameData: {
        board: [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ],
        player1: null,
        player2: null,
        currentTurn: null
      },
      yourTurn: false
    };
  }

  render() {
    return (
      <div className="App">
        <Board yourTurn={this.state.yourTurn} boardData={this.state.gameData.board}/>
      </div>
    );
  }
}

export default App;
