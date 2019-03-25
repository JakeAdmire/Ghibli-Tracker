import { userReducer } from './userReducer';
import * as actions from '../actions';

describe('userReducer', () => {
  
  const state = {};

  it('should return a state by default', () => {
    const action = {};
    const results = userReducer(state, action);
    expect(results).toEqual(state);
  })

  it('should return state with a user', () => {
    const expected = {id: 1, name: 'Jake'};
    const { id, name } = expected;
    const action = actions.loginUser(id, name);
    const results = userReducer(state, action);
    expect(results).toEqual(expected);
  })
  
})