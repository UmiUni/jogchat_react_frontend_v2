/* @flow */

import { createFormAction } from 'redux-form-saga';

export type LoginActionParams = {|
  Email: string,
  Password: string
|};

export const login = createFormAction('LOGIN');
