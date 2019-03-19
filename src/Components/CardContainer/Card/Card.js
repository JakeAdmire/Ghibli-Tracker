import React, { Component } from 'react';

export default class Card extends Component {
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
      </div>
    )
  }
}