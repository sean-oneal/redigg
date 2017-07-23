import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import GithubActions from '../Redux/GithubRedux'

export function * getRedditContent (api) {

  // make the call to the api
  const response = yield call(api.getRoot)

  if (response.ok) {
    const resData  = response.data.data.children
    // do data conversion here if needed
    yield put(GithubActions.userSuccess(resData))
  } else {
    yield put(GithubActions.userFailure(''))
  }
}
