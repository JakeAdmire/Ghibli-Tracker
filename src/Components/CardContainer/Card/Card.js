import React, { Component } from 'react';
import { addFavorite } from '../../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as help from '../../../helpers/fetch';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    }
  }

  // dont forget to set the favorites to the users state
  toggleFavorite = async () => {
    const { user, id } = this.props
    const results = await help.fetchFilms(`http://localhost:3000/api/users/${user.id}/favorites`);

    let matchFound = false;
    results.data.forEach(film => {
      if (film.movie_id === id) { matchFound = true } 
    })

    if (user.name) {  
      let methodPrefix = matchFound ? 'delete' : 'add';
      this[`${methodPrefix}Favorite`]();
      // set results.data to global user favorites (only id's) IS THIS UNNECESSARY -- MAYBE FOR LOCALSTORAGE
    } else {
      console.log('log in, stupid');
      // route to login
    }
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
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (id) => dispatch(addFavorite(id))
})

export default connect(mapStateToProps, null)(Card);