import React, { Component } from 'react';

import * as fetch from './../helpers/fetch';
import { key } from './../helpers/apiKey';
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
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`;
    const recentFilms = await fetch.fetchFilms(url);
    this.setState({defaultFilms: recentFilms.results});

  }

  render() {
    const { defaultFilms } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Account />
          <CardContainer defaultFilms={defaultFilms} />
        </header>
      </div>
    );
  }
}

export default App;
