/* @flow */

import * as authReducers from './auth';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const AppReducer = combineReducers({
  ...authReducers,
  form: formReducer
});

export default AppReducer;
