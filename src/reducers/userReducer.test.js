import { userReducer } from './userReducer';
import * as actions from '../actions';

describe('userReducer', () => {
  
  const state = {};

  it('should return a state by default', () => {
    const action = {};
    const results = userReducer(state, action);
    expect(results).toEqual(state);
  })
  
})