import React from 'react';
import { Card } from './Card/Card';
import { connect } from 'react-redux';

export function CardContainer(props) {
  const { films } = props
  console.log(props)
  const displayFilms = films.map((film) => {
    let info = {
      poster: `https://image.tmdb.org/t/p/w500${film.poster_path}`,
    };

    return <Card key={film.id} {...info} />
  })
  return (
    <div>
      { displayFilms }
    </div>
  )
}

export const mapStateToProps = (state) => ({
  films: state.defaultFilms
})

export default connect(mapStateToProps, null)(CardContainer)