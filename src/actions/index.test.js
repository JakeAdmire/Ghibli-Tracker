import * as actions from './index';

describe('actions', () => {
  it('should return a type of TOGGLE_FAVORITED', () => {
    const id = 1
    const expected = {
      type: 'TOGGLE_FAVORITED',
      id
    }
    const result = actions.toggleFavorited(id) 
    expect(result).toEqual(expected)
  })

  it('should return a type of SET_FILTER', () => {
    const filter = 'Show favorites'
    const expected = {
      type: 'SET_FILTER',
      filter
    }
    const result = actions.setFilter(filter)
    expect(result).toEqual(expected)
  })

  it('should return a type of TOGGLE_INFO', () => {
    const id = 2
    const expected = {
      type: 'TOGGLE_INFO',
      id
    }
    const result = actions.toggleInfo(id)
    expect(result).toEqual(expected)
  })

  it('should return a type of ADD_FILMS', () => {
    const films = []
    const expected = {
      type: 'ADD_FILMS',
      films,
    }
    const result = actions.addFilms(films)
    expect(result).toEqual(expected)
  })
})