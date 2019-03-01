import React, { Component } from 'react';
import './App.css';

import openSocket from 'socket.io-client';
import Board from './Board';
const socket = openSocket('http://localhost:3001');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gameData: null,
      yourTurn: false,
      yourToken: null
    };

    //This means we are playing because we got a token
    socket.on('newToken', (payload) =>{
      this.setState({
        gameData: payload,
        yourToken: payload.yourToken
      });

      this.updateGameState();
    });
  }

  updateGameState(){
    let yourTurn = false;

    if(this.state.gameData.currentTurn === 1 
      && this.state.gameData.player1 === this.state.yourToken){
      yourTurn = true;
    }else if(this.state.gameData.currentTurn === 2 
      && this.state.gameData.player2 === this.state.yourToken){
      yourTurn = true;
    }

    this.setState({
      yourTurn
    });

    console.log(this.state);
  }

  tileClick = (x,y) => {
    if(this.state.yourTurn){
      socket.emit('move', {
        id: this.state.yourToken,
        x,
        y
      });
      console.log("Clicked", x, y);
    }else{
      console.log("not your turn");
    }
  }

  render() {
    if(this.state.gameData === null){
      return <div>Loading</div>;
    }

    return (
      <div className="App">
        <Board yourTurn={this.state.yourTurn} boardData={this.state.gameData.board} clickHandle={this.tileClick} spectating={this.state.yourToken === null ? true: false}/>
      </div>
    );
  }
}

export default App;
