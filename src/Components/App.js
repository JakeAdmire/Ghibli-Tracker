import React, { Component } from 'react';

import * as fetch from './../helpers/fetch';
import { Header } from './Header/Header';
import { Account } from './Account/Account';
import { CardContainer } from './CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state={
      defaultFilms: [],
      filter: [],
      signedIn: false
    }
  }

  async componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Account />
          <CardContainer />
        </header>
      </div>
    );
  }
}

export default App;
