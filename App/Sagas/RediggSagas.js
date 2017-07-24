import { call, put } from 'redux-saga/effects';
import { path } from 'ramda';
import RediggActions from '../Redux/RediggRedux';

export function * getRedditContent (api) {

  // make the call to the api
  const response = yield call(api.getRoot);

  if (response.ok) {
    const resData  = response.data.data.children
    // do data conversion here if needed
    yield put(RediggActions.userSuccess(resData));
  } else {
    yield put(RediggActions.userFailure(''));
  }
}
