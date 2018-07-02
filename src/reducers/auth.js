/* @flow */

import { Map, type Map as MapType } from 'immutable';
import { login } from 'actions/auth';

type State = MapType<string, any>;
type ActionType = { type: string, payload: * };

const initialState = Map({
  isLogin: false,
});

export function user (state: State = initialState, action: ActionType): State {
  switch (action.type) {
    case login.SUCCESS:
      return state.merge(action.payload).set('isLogin', true);
    default:
      return state;
  }
}
