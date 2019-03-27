import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as help from '../../../helpers/fetch';
import heart from '../../../media/favorite.svg'

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  determineFavorite = async () => {
    const { id, user } = this.props
    if (user.name) {
      const results = await help.fetchFilms(`http://localhost:3000/api/users/${user.id}/favorites`);
      return results.data.forEach(film => {
        if (film.movie_id === id) return true; 
      })
    }
  }

  buildDescription() {
    const { overview } = this.props;
    return overview.split('').slice(0, 40).join('') + '...';
  }

  render() {
    const { poster_path, title, id, vote_average, original_title } = this.props;

    let heartClass = this.determineFavorite() ? 'fave active' : 'fave';
    let description = this.buildDescription();
    let style = { 
      backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
      backgroundSize: 'cover'
      }
    return (
      <div className="Card" style={ style } >
        <div className="screen"></div>
        <Link to={`/movies/${id}`}>
          <h3 className="title">{ title }</h3>
          <p className="language">{original_title}</p>
          <p className="overview">{description}</p>
        </Link>
        <p className="vote"><span>{vote_average}</span>/10</p>
        <object data={heart} type="image/svg+xml" className={heartClass} onClick={this.toggleFavorite}>
          Image not found
        </object>
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