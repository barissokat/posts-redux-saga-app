import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import logger from 'redux-logger'
import rootReducer from './reducers/index'
import { rootSaga } from './sagas/index'

// Redux-Saga handle async function with middlewares
const sagaMiddleware = createSagaMiddleware()

// Saga middleware should be applied when creating store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

// Root Saga run in saga middleware
sagaMiddleware.run(rootSaga)

export default store
