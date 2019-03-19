export const filmsReducer = (state = [], action) => {
  switch(action.type) {

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