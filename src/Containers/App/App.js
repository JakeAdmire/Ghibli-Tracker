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
import Loader from '../../Components/Loader/Loader';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      loading: false
    }
  }

  componentDidMount() {
    this.buildCards()
  }

  buildCards = async() => {
    this.setState({loading: true});
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=10342`;
    const recentFilms = await help.fetchFilms(url);
    this.props.addFilms(recentFilms.results)
    this.setState({loading: false});
  }

  determineFavorites = async () => {
    const { user } = this.props
    if (user.name) {
      const results = await help.fetchFilms(`http://localhost:3000/api/users/${user.id}/favorites`);
      if (JSON.stringify(this.props.films) === JSON.stringify(results.data)) {
        this.buildCards();
      } else {
        this.props.addFilms(results.data);
        this.setState({showFaves: true});
      }
    } else {
      this.setState({redirect: true})
    }
  }

  countFavorites = async () => {
    const { user } = this.props;
    const results = user.name && await help.fetchFilms(`http://localhost:3000/api/users/${user.id}/favorites`);
    // return user.name ? 'FAVES' + '(' + results.data.length + ')' : 'FAVES(0)';
    return user.name ? `FAVES(${results.data.length})` : 'FAVES(0)';
  }

  render() {
    const { user } = this.props;
    let welcome = user.name ? `WELCOME ${user.name.toUpperCase()}` : 'LOG IN';
    let faves = this.countFavorites();
    console.log(faves);
    return (
      <div className="App">
        <Header />
        <NavLink to='/login' className="login">{welcome}</NavLink>
        <button className="show-faves" onClick={this.determineFavorites}>FAVES</button>
        {
          this.state.loading ? <Loader /> : <Route exact path='/ghibli-tracker' component={CardContainer} />
        }
        <Route exact path='/login' component={Account} />
        <Route path='/movies/:id' render={ ({match}) => {
          const film = this.props.films.find(film => film.id === match.params.id);
          if (film) { return <Info {...film} /> }
        } }/>
        <Route exact path='/ghibli-tracker' render={() => {
          if (this.state.redirect) return <Redirect to='/login' />
          if (this.state.showFaves) return <Redirect to='/favorites' />
        }} />
        <Route exact path='/favorites' component={CardContainer} />
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
  user: PropTypes.object
}