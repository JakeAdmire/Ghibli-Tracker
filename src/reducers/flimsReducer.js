export const filmsReducer = (state = [], action) => {
  switch(action.type) {

    case('ADD_FILMS'):
      return [...state, {
        id: action.id,
        img: action.img,
        title: action.title,
        favorited: false
      }]

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