import { createSelector } from 'reselect'

const getLocalState = state => state.goals

export const getGoals = createSelector(
  getLocalState,
  goals => goals || {}, // the whole object {goals:[], isFetching: boolean}
)

export const getGoalById = createSelector(
  (id) => id,
  (id, state) => getGoals(state),
  (id, goals) => {
    const goal = goals.goals.filter(item => item.id === id) // filter goals array
    return goal.length === 0 ? null : goal[0] // if goal does not exist i return null
  },
)
