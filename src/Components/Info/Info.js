import React from 'react';
import PropTypes from 'prop-types';

export function Info(props) {
  console.log(props)
  return (
    <div>
      <h1>{props.title}</h1><p>{props.vote_average}/10</p>
      <h2>{props.original_title}</h2>
      <p>{props.release_date}</p>
      <p>{props.overview}</p> 
    </div>
  )
}

Info.propTypes = {
  props: PropTypes.object.isRequired
}
