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

export const addFilms = (id, img, title) => ({
  type: 'ADD_FILMS',
  id,
  img,
  title
})