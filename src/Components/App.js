import React, { Component } from 'react';
import { Header } from './Header/Header';
import { Account } from './Account/Account';
import { CardContainer } from './CardContainer/CardContainer';

class App extends Component {
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
