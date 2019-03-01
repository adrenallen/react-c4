import React, { Component } from 'react';
import './App.css';

class Tile extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
      this.props.clickHandle(this.props.xPos, this.props.yPos);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
          {this.props.xPos}, {this.props.yPos}, {this.props.token}
      </div>
    );
  }
}

export default Tile;
