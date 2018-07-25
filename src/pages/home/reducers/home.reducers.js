import * as types from '../actions/home.actions'

const initState = {
  goals: [],
  isFetching: false,
}

export const reducers = (state = initState, action) => {
  switch (action.type) {
    case types.REQUEST_GOALS:
    case types.RECEIVE_GOALS_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      }
    case types.RECEIVE_GOALS:
      return {
        ...state,
        ...action.payload,
      }
    case types.RECEIVE_GOALS_FAIL:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        message: action.payload.err,
        success: false,
      }
    default:
      return state
  }
}
