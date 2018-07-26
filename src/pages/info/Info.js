import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { GoalCard } from '../../components/goalCard'

import * as selectors from '../home/selectors/home.selectors'

class Info extends Component {
  componentDidMount() {

  }

  render() {
    const goalInfo = this.props.goal// eslint-disable-line

    if (!goalInfo) {
      return (
        <p>
          Sorry , this item does not exist.
          Please go back and chose another card
          <Link to="/">
            here
          </Link>
        </p>
      )
    }

    // if item exists on state i display it
    return (
      <div>
        <GoalCard
          goal={goalInfo}
          key="001"
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const goalId = ownProps.match.params.id

  return {
    goal: selectors.getGoalById(goalId, state),
  }
}

export default connect(mapStateToProps, null)(Info)
