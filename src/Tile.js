import React, { Component } from 'react';
import './App.css';

class Tile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
          {this.props.xPos}, {this.props.yPos}, {this.props.token}
      </div>
    );
  }
}

export default Tile;
