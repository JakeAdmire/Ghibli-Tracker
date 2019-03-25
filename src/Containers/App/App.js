import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as fetch from '../../helpers/fetch';
import { key } from '../../helpers/apiKey';
import { NavLink, Route } from 'react-router-dom';
import { Header } from '../../Components/Header/Header';
import Account from './Account/Account';
import { Info } from '../../Components/CardContainer/Card/Info/Info';
import CardContainer from '../../Components/CardContainer/CardContainer';
import { addFilms } from '../../actions';
import PropTypes from 'prop-types';


export class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.buildCards()
  }

  buildCards = async() => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=10342`;
    const recentFilms = await fetch.fetchFilms(url);
    this.props.addFilms(recentFilms.results)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavLink to='/login' className="login">Log in:</NavLink>
        <Route exact path='/' component={CardContainer} />
        <Route exact path='/login' component={Account} />
        <Route path='/:id' render={ ({match}) => {
          const film = this.props.films.find(film => film.id == match.params.id);

          if (film) { return <Info {...film} /> }
        } }/>

      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  films: state.films
})

export const mapDispatchToProps = (dispatch) => ({
  addFilms: (films) => dispatch(addFilms(films))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

App.propTypes = {
  addFilms: PropTypes.func.isRequired,
  films: PropTypes.array
}

