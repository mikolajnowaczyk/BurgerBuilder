import { BurgerBuilder } from './BurgerBuilder'
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import reducer from './auth'
import * as actionTypes from '../actions/actionTypes'

describe('auth reducer', () => {
  it('shoud return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    });
  });

  it('shoud store the token upon login', () => {
    expect(reducer({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    }, {
      type: actionTypes.AUTH_SUCCESS,
      idToken: 'some-token',
      userId: 'some-user-id'
    })).toEqual({
      token: 'some-token',
      userId: 'some-user-id',
      error: null,
      loading: false,
      authRedirectPath: '/'
    });
  });

})
