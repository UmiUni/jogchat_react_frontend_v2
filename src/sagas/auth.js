import { call, put, takeEvery } from 'redux-saga/effects';
import { login } from 'actions/auth';
import { SubmissionError } from 'redux-form';

// this function can be replaced by actual login APi call
const fakeLogin = params => console.log('Login with: ', params);

function* handleLoginSaga (action) {
  try {
    yield call(fakeLogin, action.payload);
    yield put(login.success());
  } catch (error) {
    const formError = new SubmissionError({
      _error: 'Login failed',
    });

    yield put(login.failure(formError));
  }
}

function* loginWatcherSaga () {
  yield takeEvery(login.REQUEST, handleLoginSaga);
}

export default loginWatcherSaga;
