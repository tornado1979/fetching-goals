import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux'

import thunk from 'redux-thunk'
import { reducers as goals } from './pages/home/reducers/home.reducers'
import logger from './middlewares/logger'

const initialState = {
  goals: {
    goals: [],
    isFetching: false,
  },
}

const enhancers = []
const middlewares = [
  thunk,
]

if (process.env.NODE_ENV) {
  middlewares.push(logger)
}

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension // eslint-disable-line prefer-destructuring

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
)

const appReducers = combineReducers({
  goals,
})
const store = createStore(
  appReducers,
  initialState,
  composedEnhancers,
)

export default store
