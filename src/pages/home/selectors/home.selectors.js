import { createSelector } from 'reselect'

const getLocalState = state => state.goals

export const getGoals = createSelector(
  getLocalState,
  goals => goals || {}, // the whole object {goals:[], isFetching: boolean}
)
