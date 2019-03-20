import React from 'react';
import { Card } from './Card/Card';

export function CardContainer({defaultFilms}) {
  const displayFilms = defaultFilms.map((film) => {
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