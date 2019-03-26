import React, { Component } from 'react';
import { connect } from 'react-redux';
import { key } from '../../helpers/apiKey';
import { NavLink, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as help from '../../helpers/fetch';
import Account from './Account/Account';
import CardContainer from '../../Components/CardContainer/CardContainer';
import { Header } from '../../Components/Header/Header';
import { Info } from '../../Components/CardContainer/Card/Info/Info';
import { addFilms } from '../../actions';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    this.buildCards()
  }

  buildCards = async() => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=10342`;
    const recentFilms = await help.fetchFilms(url);
    this.props.addFilms(recentFilms.results)
  }

  determineFavorites = async () => {
    const { user } = this.props
    if (user.name) {
      const results = await help.fetchFilms(`http://localhost:3000/api/users/${user.id}/favorites`);
      if (JSON.stringify(this.props.films) === JSON.stringify(results.data)) {
        this.buildCards();
      } else {
        this.props.addFilms(results.data);
      }
    } else {
      this.setState({redirect: true})
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavLink to='/login' className="login">Log in:</NavLink>
        <button onClick={this.determineFavorites}>FAVES</button>
        <Route exact path='/' component={CardContainer} />
        <Route exact path='/login' component={Account} />
        <Route path='/:id' render={ ({match}) => {
          const film = this.props.films.find(film => film.id == match.params.id);
          if (film) { return <Info {...film} /> }
        } }/>
        <Route exact path='/' render={() => (
          this.state.redirect && <Redirect to='/login' />
        )} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  films: state.films,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  addFilms: (films) => dispatch(addFilms(films))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

App.propTypes = {
  addFilms: PropTypes.func.isRequired,
  films: PropTypes.array,
  user: PropTypes.object.isRequired
}