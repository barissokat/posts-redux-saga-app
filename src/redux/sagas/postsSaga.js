// When the API triggered and after response have arrived, Redux-Saga dispatch "FETCH_POST_SUCCESS" action.
import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { fetchPostsSuccess, fetchPostsFailure } from '../actions/postsActions'
import { FETCH_POST_REQUEST } from '../types/index'

const getPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts')

// Redux-Saga use ES6 Generators with '*' and 'yield'
// When 'FETCH_POST_REQUEST' action dispatched, 'fetchPostsSaga' function call API asynchronously.
// If api return success Saga dispatch next action which is 'FETCH_POST_SUCCESS'
// If api return error Saga dispatch next action which is 'FETCH_POST_FAILURE'
function * fetchPostsSaga () {
  try {
    const response = yield call(getPosts)
    yield put(
      fetchPostsSuccess({
        posts: response.data
      })
    )
  } catch (e) {
    yield put(
      fetchPostsFailure({
        error: e.message
      })
    )
  }
}

// Saga listens FETCH_POST_REQUEST action.
// When action is dispatched, call fetchPostsSaga function
function * postsSaga () {
  yield all([takeLatest(FETCH_POST_REQUEST, fetchPostsSaga)])
}

export default postsSaga
