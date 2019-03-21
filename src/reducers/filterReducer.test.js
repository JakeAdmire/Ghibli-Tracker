import { filterReducer } from './filterReducer';
import * as actions from '../actions';

describe('filterReducer', () => {
  
  const state = 'Show all'

  it('should return a state by default', () => {
    const action = {}
    const results = filterReducer(state, action)
    expect(results).toEqual(state)
  })

  it('should return state with a filter', () => {
    const filter = 'Show favorites'
    const action = actions.setFilter(filter)
    const results = filterReducer(state, action)
    expect(results).toEqual(filter)
  })
  
})