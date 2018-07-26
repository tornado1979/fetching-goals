import axios from 'axios'
import * as types from '../actions/home.actions'
import * as constants from '../../../config'

const requestGoals = () => {
  return {
    payload: {
      isFetching: true,
    },
    type: types.REQUEST_GOALS,
  }
}

const receiveGoals = (data) => {
  return {
    payload: {
      goals: data,
    },
    type: types.RECEIVE_GOALS,
  }
}

const receiveGoalsSuccess = () => {
  return {
    payload: {
      isFetching: false,
    },
    type: types.RECEIVE_GOALS_SUCCESS,
  }
}

const error = (err) => {
  return {
    payload: {
      err: err.response.data.error, // error message from server
      isFetching: false,
    },
    type: types.RECEIVE_GOALS_FAIL,
  }
}

export const fetchGoals = (queryString = {}) => (dispatch) => {
  // execute REQUEST_GOALS
  dispatch(requestGoals())

  // convert queryString {'length': 100} to array ['length', '100'] and get the 2nd val
  const entries = Object.entries(queryString)

  // i could also make dynamic the length as ${entries[0][0]}
  const params = entries.length !== 0 ? `?length=${entries[0][1]}` : ''

  return axios(`${constants.GOALS_ENDPOINT}${params}`)
    .then(response => response.data)
    .then(goals => {
      // execute RECEIVE_GOALS
      dispatch(receiveGoals(goals))
      // execute RECEIVE_GOALS_SUCCESS
      dispatch(receiveGoalsSuccess())
    })
    // execute RECEIVE_GOALS_FAIL
    .catch(err => dispatch(error(err)))
}

export const fetchGoalById = (id = '') => (dispatch) => {
  // execute REQUEST_GOAL
  dispatch(requestGoals())

  return axios(`${constants.GOALS_ENDPOINT}/${id}`)
    .then(response => response.data)
    .then(goal => {
      // execute RECEIVE_GOAL
      dispatch(receiveGoals([goal]))
      // execute RECEIVE_GOAL_SUCCESS
      dispatch(receiveGoalsSuccess())
    })
    // execute RECEIVE_GOAL_FAIL
    .catch(err => dispatch(error(err)))
}
