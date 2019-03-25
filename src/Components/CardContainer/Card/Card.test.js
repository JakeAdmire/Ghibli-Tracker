import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('Card', () => {

  let wrapper;
  let key;
  let mockInfo;

  beforeEach(() => {
    const mockId = 1
    mockInfo = {poster: 'poster', title: 'title', id: mockId }
    wrapper = shallow(<Card key={mockId} {...mockInfo}/>)
  })

  it('should have the correct default state', () => {
    expect(wrapper.state()).toEqual({
      favorite: false
    })
  })

  it ('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  })

})