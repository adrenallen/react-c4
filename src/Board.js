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
            let key = c + '' + r + '' + rowData[c];
            tiles.push(<Tile className='board-tile' xPos={c} yPos={r} token={rowData[c]} key={key} clickHandle={this.props.clickHandle}/>);
        }
        rows.push(<div key={r} className='board-row'>{tiles}</div>);
    }




    return (
        <React.Fragment>
            <div>{this.props.yourTurn ? "It's your turn" : ""}</div>
            <div className='board-grid'>
                {rows}
            </div>
        </React.Fragment>
    );
  }
}

export default Board;
