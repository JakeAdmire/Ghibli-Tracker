export const filmsReducer = (state = [], action) => {
  switch(action.type) {

    case('ADD_FILMS'):
      return action.films

    case('TOGGLE_FAVORITED'):
      return state.map(film => {
        if (film.id === action.id) {
          return {...film, favorited: !film.favorited}
        } else {
          return film;
        }
      })

    default:
      return state;
  }
}