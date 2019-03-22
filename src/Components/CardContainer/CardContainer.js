import React from 'react';
import { Card } from './Card/Card';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function CardContainer(props) {
  const { films } = props
  const displayFilms = films.map((film) => {
    let info = {
      poster: `https://image.tmdb.org/t/p/w500${film.poster_path}`,
      title: film.title,
      id: film.id
    };
    return  <Link to={`/${film.id}`}>
              <Card key={film.id} {...info} />
            </Link>
  })
  return (
    <div className="CardContainer">
      { displayFilms }
    </div>
  )
}

export const mapStateToProps = (state) => ({
  films: state.films
})

export default connect(mapStateToProps, null)(CardContainer)