export const toggleFavorited = (id) => ({
  type: 'TOGGLE_FAVORITED',
  id
})

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
})