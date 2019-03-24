import React from 'react';
import { CardContainer, mapStateToProps }  from './CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {

  let mockFilms;
  let mockState;
  let wrapper;

  describe('CardContainer', () => {

    it('should match the snapshot', () => {

      mockFilms = [{
        "vote_count": 7068,
        "id": 129,
        "video": false,
        "vote_average": 8.5,
        "title": "Spirited Away",
        "popularity": 26.943,
        "poster_path": "/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
        "original_language": "ja",
        "original_title": "千と千尋の神隠し",
        "genre_ids": [
            16,
            10751,
            14
        ],
        "backdrop_path": "/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg",
        "adult": false,
        "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
        "release_date": "2001-07-20"
      }]

      wrapper = shallow(<CardContainer films={mockFilms} />)

      expect(wrapper.debug()).toMatchSnapshot();
   })
  
  })

  describe('mapStateToProps', () => {

    it('should return an array of film objects as props', () => {

      mockFilms = [{
        "vote_count": 7068,
        "id": 129,
        "video": false,
        "vote_average": 8.5,
        "title": "Spirited Away",
        "popularity": 26.943,
        "poster_path": "/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
        "original_language": "ja",
        "original_title": "千と千尋の神隠し",
        "genre_ids": [
            16,
            10751,
            14
        ],
        "backdrop_path": "/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg",
        "adult": false,
        "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
        "release_date": "2001-07-20"
      }]

      mockState = {
        films: mockFilms,
        filter: 'Show all',
        user: {}
      }

      const expected = {
        films: mockFilms
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

})