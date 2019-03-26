import React, { Component } from 'react';
import { addFavorite } from '../../../actions';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import Account from '../../../Containers/App/Account/Account';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    }
  }

  

  async addFavorite() {
    // const { movie_id, user_id, title, poster_path, release_date, vote_average, overview } = this.props;
    // this.props.addFavorite(movie_id);
    // const movieData = {
    //   movie_id, 
    //   user_id, 
    //   title, 
    //   poster_path, 
    //   release_date, 
    //   vote_average, 
    //   overview
    // }
    // try {
    //   const response = await fetch('http://localhost:3000/api/users/favorites/new', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json'},
    //     body: JSON.stringify(movieData)
    //   })
    //   const results = await response.json();
    //   console.log(results);
    // } catch(error) {
    //   throw new Error('oops');
    // }
  }

  deleteFavorite() {

  }

  render() {
    const { poster, title, id, toggleFavorite } = this.props;
    let style = { 
      backgroundImage: `url(${poster})`,
      backgroundSize: 'cover'
      }
    return (
      <div className="Card" style={ style } >
        <div className="screen">
          <Link to={`/${id}`}>
            <span>{ title }</span>
          </Link>
          <button onClick={ () => toggleFavorite(id, this.state.favorite) }>FAVE</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);

// movie_id, user_id and title, poster_path, release_date, vote_average, overview