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
    const { poster, title } = this.props;
    let style = { 
      backgroundImage: `url(${poster})`,
      backgroundSize: 'cover'
      }
    return (
      <div className="Card" style={ style } >
        <div className="screen">
          <span>{ title }</span>
        </div>
      </div>
    )
  }
}