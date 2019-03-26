import React, { Component } from 'react';
import Card from './Card/Card';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { key } from '../../helpers/apiKey';
import * as fetch from '../../helpers/fetch';

export class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  toggleFavorite = (id, favorite) => {
    console.log(favorite);
    if (this.props.user.name) {   
      // let status = favorite;
      // this.setState({favorite: !status})

      if (!favorite) {
        this.addFavorite(id);
      } else {
        this.deleteFavorite();
      }
    } else {
      console.log('log in stupid');
      // <Route path='/login' component={Account} />
    }
  }

  addFavorite = async (id) => {
    const data = await fetch.fetchFilms(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`);
    const { title, poster_path, release_date, vote_average, overview } = data;
    const movieData = {
      movie_id: id, 
      user_id: this.props.user.id, 
      title, 
      poster_path, 
      release_date, 
      vote_average, 
      overview
    }
    console.log(movieData);
    try {
      const response = await fetch('http://localhost:3000/api/users/favorites/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(movieData)
      })
      const results = await response.json();
      console.log(results);
    } catch(error) {
      throw new Error('oops');
    }
  }

  deleteFavorite() {
    console.log('deleting favorites...');
  }

  buildCards() {
    const { films } = this.props;
    return films.map((film) => {
      let info = {
        poster: `https://image.tmdb.org/t/p/w500${film.poster_path}`,
        title: film.title,
        id: film.id
      };
      return <Card key={film.id} toggleFavorite={this.toggleFavorite} {...info} />
    }) 
  }

  render() {
    return (
      <div className="CardContainer">
        { 
          this.buildCards()
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  films: state.films,
  user: state.user
})

export default connect(mapStateToProps, null)(CardContainer)