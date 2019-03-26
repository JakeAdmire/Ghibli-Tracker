import React, { Component } from 'react';

export class Header extends Component {
  constructor() {
    super();
  }

  // build getFavorites method

  render() { 
    return (
      <div className="Header">
        <h1>Howl's Movie Castle</h1>
        <button>Faves</button>
      </div>
    )
  }
}