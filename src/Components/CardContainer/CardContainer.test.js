import React from 'react';
import { CardContainer, mapStateToProps }  from './CardContainer';
import { shallow } from 'enzyme';



describe('CardContainer', () => {

  let mockFilms;
  let mockState;


  describe('CardContainer', () => {

    mockFilms = [
        {
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
        },
        {
            "vote_count": 3088,
            "id": 8392,
            "video": false,
            "vote_average": 8.1,
            "title": "My Neighbor Totoro",
            "popularity": 25.586,
            "poster_path": "/2i0OOjvi7CqNQA6ZtYJtL65P9oZ.jpg",
            "original_language": "ja",
            "original_title": "となりのトトロ",
            "genre_ids": [
                14,
                16,
                10751
            ],
            "backdrop_path": "/fYU3ckVE1zECs42ZO0uSoJpwlXi.jpg",
            "adult": false,
            "overview": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
            "release_date": "1988-04-16"
        }
    ]

    it.skip('should create an info object to pass to card component', () => {

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

      const mockState = {
        films: mockFilms,
        filter: 'Show all',
        user: {}
      }

      const expected = {
        films: mockFilms
      }

      const mappedProps = mapStateToProps(mockState)
      console.log(mockFilms)
      expect(mappedProps).toEqual(expected)
    })
  })

})