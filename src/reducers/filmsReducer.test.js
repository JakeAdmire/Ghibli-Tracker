import { filmsReducer } from './filmsReducer';
import * as actions from '../actions';

describe('filmsReducer', () => {

  const state = []

  it('should return state by default', () => {
    const action = {}
    const results = filmsReducer(state, action)
    expect(results).toEqual(state)
  })

  it('should return the state with added films', () => {
    const films = [{}, {}]
    const action = actions.addFilms(films)
    const results = filmsReducer(state, action)
    expect(results).toEqual(films)
  })

  it('should return the state with favorites toggled', () => {
    const state = [
      {
        favorited: false,
        id: 1
      },
      {
        favorited: false,
        id: 2
      }
    ]
    const action = actions.toggleFavorited(2)
    const results = filmsReducer(state, action)
    const expected = [
      {
        favorited: false,
        id: 1
      },
      {
        favorited: true,
        id: 2
      }
    ]
    expect(results).toEqual(expected)
  })

})