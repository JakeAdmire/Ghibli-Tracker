export const userReducer = (state = {}, action) => {
  switch(action.type) {

    case('LOGIN_USER'):
      return {...state, 
        id: action.id,
        name: action.name
      }

    case('ADD_FAVORITE'):
      let userFavorites = [...state.favorites, action.id];
      return {...state, favorites: userFavorites}

    default:
      return state;
  }
}