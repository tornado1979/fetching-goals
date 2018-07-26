import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import queryString from 'query-string'

import { fetchGoals } from './actionCreators/home.actionCreators'
import * as selectors from './selectors/home.selectors'

import './home.scss'
import { GoalCard } from '../../components/goalCard'

class Home extends Component {
  componentDidMount() {
    // destructure 'getGoals' from props
    const {
      getGoals,
      location,
    } = this.props

    // get the queryString from url, as an object {'key': 'value'}
    const parsed = queryString.parse(location.search)

    // call 'getGoals' from actionCreators
    getGoals(parsed)
  }

  createGoals(goals) { // eslint-disable-line class-methods-use-this
    let goalsDOM

    if (goals && goals.length > 0) {
      goalsDOM = goals.map((goal) => {
        return (
          <GoalCard
            goal={goal}
            key={goal.id}
          />
        )
      })
    }
    return goalsDOM
  }


  render() {
    const {
      goals,
      isFetching,
    } = this.props.goals //eslint-disable-line

    const goalsData = this.createGoals(goals)

    return (
      <main>
        <div className="wrapper">
          {isFetching
            && (
            <div>
              Loading.....
            </div>
            )}
          {!isFetching && goalsData}
        </div>
      </main>
    )
  }
}

Home.propTypes = {
  getGoals: propTypes.func.isRequired,
  goals: propTypes.shape({
    goals: propTypes.array,
    isFetching: propTypes.bool,
  }).isRequired,
  location: propTypes.shape({
    search: propTypes.string.isRequired,
  }).isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGoals: (params) => {
      dispatch(fetchGoals(params))
    },
  }
}

const mapStateToProps = (state) => {
  return {
    goals: selectors.getGoals(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
