import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as fetch from '../../helpers/fetch';
import { key } from '../../helpers/apiKey';
import { Header } from '../../Components/Header/Header';
import { Account } from '../../Components/Account/Account';
import { CardContainer } from '../../Components/CardContainer/CardContainer';
import { addFilms } from '../../actions';
import { Loader } from '../../Components/Loader/Loader';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      showFilms: false
    }
  }

  componentDidMount() {
    this.buildCards()
  }

  buildCards = async() => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`;
    const recentFilms = await fetch.fetchFilms(url);
    this.props.addFilms(recentFilms.results)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Account />
          {
            !this.state.showFilms ? <Loader /> : <CardContainer />
          }
        </header>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addFilms: (films) => dispatch(addFilms(films))
})

export default connect(null, mapDispatchToProps)(App)

