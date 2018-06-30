/* @flow */

import * as authReducers from './auth';
import { combineReducers } from 'redux';

const AppReducer = combineReducers({
  ...authReducers
});

export default AppReducer;
