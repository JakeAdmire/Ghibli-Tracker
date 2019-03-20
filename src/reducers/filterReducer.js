export const filterReducer = (state = 'Show all', action) => {
  switch(action.type) {

    case('SET_FILTER'):
      return action.filter;

    default:
      return state;
  }
}