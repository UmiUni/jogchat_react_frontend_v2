/* @flow */

import { call, put, takeEvery } from 'redux-saga/effects';
import { login as loginAction, type LoginActionParams } from 'actions/auth';
import client from 'client';
import type { Saga } from 'redux-saga';
import { SubmissionError } from 'redux-form';

const login = ({ Email, Password }: LoginActionParams): Promise<*> =>
  client.post('/login', { Email, Password });

function* handleLoginSaga (action: { payload: LoginActionParams }): * {
  try {
    const res = yield call(login, action.payload);
    yield put(loginAction.success(res.data));
  } catch (error) {
    const formError = new SubmissionError({
      _error: 'Login failed',
    });

    yield put(loginAction.failure(formError));
  }
}

function* loginWatcherSaga (): Saga<void> {
  yield takeEvery(loginAction.REQUEST, handleLoginSaga);
}

export default loginWatcherSaga;
