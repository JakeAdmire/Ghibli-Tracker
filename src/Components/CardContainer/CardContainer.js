import React from 'react';
import Card from './Card/Card';
import { connect } from 'react-redux';

export function CardContainer(props) {
  
  const { films } = props;
  const finalCards = films.map((film) => {
    return <Card key={film.id} {...film} />
  }) 

  return (
    <div className="CardContainer">
      { finalCards }
    </div>
  )

}

export const mapStateToProps = (state) => ({
  films: state.films
})

export default connect(mapStateToProps, null)(CardContainer)