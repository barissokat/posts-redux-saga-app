// Action creators returns an object with only type of action.
import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from '../types/index'

export const fetchPostsRequest = () => ({
  type: FETCH_POST_REQUEST
})

export const fetchPostsSuccess = payload => ({
  type: FETCH_POST_SUCCESS,
  payload
})

export const fetchPostsFailure = payload => ({
  type: FETCH_POST_FAILURE,
  payload
})
