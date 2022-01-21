import { all, fork } from 'redux-saga/effects'
import postsSaga from './postsSaga'

// RootSaga listens actions
export function * rootSaga () {
  yield all([fork(postsSaga)])
}
