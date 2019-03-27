export const userReducer = (state = {}, action) => {
  switch(action.type) {

    case('LOGIN_USER'):
      return {...state, 
        id: action.id,
        name: action.name
      }

    default:
      return state;
  }
}