import { all } from 'redux-saga/effects';
import formActionSaga from 'redux-form-saga';
import loginSaga from './auth';

function* rootSaga () {
  yield all([ formActionSaga(), loginSaga() ]);
}

export default rootSaga;
