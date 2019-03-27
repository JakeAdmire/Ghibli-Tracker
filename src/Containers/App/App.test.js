import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { addFilms } from '../../actions';


describe('App', () => {

  let wrapper;
  let mockRecentFilms;
  let mockFilms;
  let mockState;
  

  describe('App', () => {

    it('should call addFilms with correct arguments', () => {

      const props = {
        addFilms: jest.fn()
      }
  
      wrapper = shallow(<App {...props} />)
  
      mockRecentFilms = {
        "page": 1,
        "total_results": 60,
        "total_pages": 3,
        "results": [
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
                    16, 10751, 14
                ],
                "backdrop_path": "/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg",
                "adult": false,
                "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
                "release_date": "2001-07-20"
            }]
        }
  
      wrapper.instance().props.addFilms(mockRecentFilms.results)
      expect(props.addFilms).toHaveBeenCalledWith(mockRecentFilms.results)
    })
  
    it('should match the snapshot', () => {
      const props = { addFilms: jest.fn() }
      wrapper = shallow(<App {...props} />)
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
            16, 10751, 14
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
        films: mockFilms,
        user: {}
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)

    })

  })

  describe('mapDispatchToProps', () => {

    it('should provide a method to use to dispatch an action creator', () => {
      const mockFilm = {title: 'Spirited Away', id: 129}
      const mockDispatch = jest.fn()
      const actionToDispatch = addFilms(mockFilm)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addFilms(mockFilm)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

  })

})
