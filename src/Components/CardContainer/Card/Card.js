import React, { Component } from 'react';
import { Info } from './Info/Info';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    }
  }

  render() {
    const { poster } = this.props;
    let style = { 
      backgroundImage: `url(${poster})`,
      backgroundSize: 'cover'
      }
    return (
      <div className="Card" style={ style } >
        <Info />
      </div>
    )
  }
}