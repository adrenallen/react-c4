import React, { Component } from 'react';
import './App.css';
import Tile from './Tile';

class Board extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render() {

    let rows = [];

    for(var r = 0; r < this.props.boardData.length; r++){
        let tiles = [];
        let rowData = this.props.boardData[r];
        for(var c = 0 ; c < rowData.length; c++){
            tiles.push(<Tile className='board-tile' xPos={c} yPos={r} token={rowData[c]} />);
        }
        rows.push(<div class='board-row'>{tiles}</div>);
    }




    return (
      <div class='board-grid'>
          {rows}
      </div>
    );
  }
}

export default Board;
