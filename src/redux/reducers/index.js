import { combineReducers } from 'redux'
import postsReducer from './postsReducer'

// All reducers come together in Root Reducer
const rootReducer = combineReducers({
  posts: postsReducer
})

export default rootReducer
