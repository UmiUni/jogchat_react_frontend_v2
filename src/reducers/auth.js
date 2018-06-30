/* @flow */

import * as types from '../actions/types';
import type Immutable from 'immutable';

const { Map } = require('immutable');

type State = Immutable.Map<string, any>;

const initialState = Map({
  isLogin: false,
});

export function user (state: State = initialState, action): State {
  switch (action.type) {
    default:
      return state;
  }
}
