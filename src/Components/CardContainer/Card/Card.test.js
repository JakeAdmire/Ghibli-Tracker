import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps } from './Card';

describe('Card', () => {

  let wrapper;
  let key;
  let mockInfo;

  beforeEach(() => {
    mockInfo = {
      adult: false,
      backdrop_path: "/fYU3ckVE1zECs42ZO0uSoJpwlXi.jpg",
      genre_ids: (3) [14, 16, 10751],
      id: 8392,
      original_language: "ja",
      original_title: "となりのトトロ",
      overview: "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
      popularity: 23.344,
      poster_path: "/2i0OOjvi7CqNQA6ZtYJtL65P9oZ.jpg",
      release_date: "1988-04-16",
      title: "My Neighbor Totoro",
      video: false,
      vote_average: 8.1,
      vote_count: 3095
    }
    wrapper = shallow(<Card key={mockInfo.id} {...mockInfo}/>)
  })

  it('should have the correct default state', () => {
    expect(wrapper.state()).toEqual({
      redirect: false
    })
  })

  it ('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  })

  // it('should change state when toggleFavorite is called', () => {
  //   expect(wrapper.state('redirect')).toEqual(false);
  //   wrapper.instance().toggleFavorite();
  //   expect(wrapper.state('redirect')).toEqual(true);
  // })

  it('buildDescription should trim down film overview', () => {
    let results = 'Two sisters move to the country with the...';
    expect(wrapper.instance().buildDescription()).toEqual(results);
  })

  describe('mapStateToProps', () => {

    it('should return a user object as props', () => {

      let mockUser = { name: 'Bob', id: 1 };

      let mockState = {
        films: [],
        filter: 'Show all',
        user: mockUser
      }

      const expected = {
        user: mockUser
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)

    })

  })

})