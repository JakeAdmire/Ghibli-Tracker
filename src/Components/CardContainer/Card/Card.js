import React, { Component } from 'react';
import { addFavorite } from '../../../actions';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as help from '../../../helpers/fetch';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      redirect: false
    }
  }

  toggleFavorite = async () => {
    const { user, id } = this.props
    let matchFound = false;
    if (user.name) {
      const results = await help.fetchFilms(`http://localhost:3000/api/users/${user.id}/favorites`);
      results.data.forEach(film => {
        if (film.movie_id === id) { matchFound = true }
      })
      let methodPrefix = matchFound ? 'delete' : 'add';
      this[`${methodPrefix}Favorite`]();
    } else {
      console.log('log in, stupid');
      this.setState({redirect: true});
    }
  }

  addFavorite = async () => {
    const { id, title, poster_path, release_date, vote_average, overview, user } = this.props
    await fetch('http://localhost:3000/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify({
        user_id: user.id,
        movie_id: id, 
        title, 
        poster_path,
        release_date,
        vote_average,
        overview
      }),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  deleteFavorite = async () => {
    const { id, user } = this.props;
    await fetch(`http://localhost:3000/api/users/${user.id}/favorites/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        movie_id: id, 
        user_id: user.id
      }),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  render() {
    const faveClass = this.state.favorite ? 'faved' : '';
    const { poster_path, title, id } = this.props;
    let style = { 
      backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
      backgroundSize: 'cover'
      }
    return (
      <div className="Card" style={ style } >
        <div className="screen">
          <Link to={`/${id}`}>
            <span>{ title }</span>
          </Link>
          <button className={faveClass} onClick={this.toggleFavorite}>FAVE</button>
        </div>
        {
          this.state.redirect && <Redirect to='/login' />
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, null)(Card);