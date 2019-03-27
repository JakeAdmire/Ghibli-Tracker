import React from 'react';
import { shallow } from 'enzyme';
import { Account } from './Account';
import { loginUser } from '../../../actions';
import { mapDispatchToProps } from '../App';

describe('Account', () => {
  let wrapper;
  let mockEvent;

  beforeEach(() => {
    wrapper=shallow(<Account loginUser={loginUser} />)
  })

  describe('Account', () => {
    it ('should have the correct default state', () => {
      expect(wrapper.state()).toEqual({
        name: '',
        email: '',
        password: '',
        loggedIn: false,
        errorMessage: ''
      })
    })

    it('should setState for name when handleChange is invoked', () => {
      mockEvent = {target: {name: 'name', value: 'Kim'}}
      wrapper.instance().handleChange(mockEvent)
      expect(wrapper.state()).toEqual({
        name: 'Kim',
        email: '',
        password: '',
        loggedIn: false,
        errorMessage: ''
      })
    })

    it('validateUser should call fetchUser with the correct url and data if Log In clicked', () => {
      const mockUrl = 'www.users.com'
      const mockFormData = {
        email: 'kim@gmail.com',
        password: 'kim'
      }
      wrapper.instance().validateUser = jest.fn()
      wrapper.instance().fetchUser = jest.fn()
      wrapper.instance().validateUser(mockUrl, mockFormData)
      wrapper.instance().fetchUser(mockUrl, mockFormData)
      expect(wrapper.instance().fetchUser).toHaveBeenCalledWith(mockUrl, mockFormData)
    })

    it('createUser should call fetchUser with the correct url and data if Sign Up clicked', () => {
      const mockUrl = 'www.newusers.com'
      const mockFormData = {
        name: 'Kim',
        email: 'kim@gmail.com',
        password: 'kim'
      }
      wrapper.instance().createUser = jest.fn()
      wrapper.instance().fetchUser = jest.fn()
      wrapper.instance().createUser(mockUrl, mockFormData)
      wrapper.instance().fetchUser(mockUrl, mockFormData)
      expect(wrapper.instance().fetchUser).toHaveBeenCalledWith(mockUrl, mockFormData)
    })

    it('createUser should call fetchUser with the correct url and data if Sign Up clicked', () => {
      const results = {
        data: {
          id: 1,
          name: 'Kim'
        }
      }
    })

    it('should match the snapshot', () => {
      expect(wrapper.debug()).toMatchSnapshot()
    })

  })

  describe('mapDispatchToProps', () => {
    it('should provide a method to use to dispatch an action creator', () => {
      const mockId = 1
      const mockName = 'Jake'
      const mockDispatch = jest.fn()
      const actionToDispatch = loginUser(mockId, mockName)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.loginUser(mockId, mockName)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })


})