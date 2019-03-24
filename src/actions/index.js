export const toggleFavorited = (id) => ({
  type: 'TOGGLE_FAVORITED',
  id
})

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
})

export const toggleInfo = (id) => ({
  type: 'TOGGLE_INFO',
  id
})

export const addFilms = (films) => ({
  type: 'ADD_FILMS',
  films
})

export const addUser = (name, email, password) => ({
  type: 'ADD_USER',
  name,
  email,
  password
})

export const loginUser = (email, password) => ({
  type: 'LOGIN_USER',
  email,
  password
})