import React, { Component } from 'react';
import { Info } from './Info/Info';

export class Card extends Component {
  constructor() {
    super();
    this.state = {
      favorite: false,
    }
  }

  render() {
    return (
      <div>
        <h1>This is your card component</h1>
        <Info />
      </div>
    )
  }
}