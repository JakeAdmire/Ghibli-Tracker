import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as fetch from '../../helpers/fetch';
import { key } from '../../helpers/apiKey';
import { Header } from '../../Components/Header/Header';
import { Account } from '../../Components/Account/Account';
import { CardContainer } from '../../Components/CardContainer/CardContainer';

export class App extends Component {
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

export const mapStateToProps = (state) => ({
  films: state.defaultFilms,
  filter: state.filter
})

export default connect(mapStateToProps, null) (App)

