import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { GoalCard } from '../../components/goalCard'

import * as actions from '../home/actionCreators/home.actionCreators'
import * as selectors from '../home/selectors/home.selectors'

class Info extends Component {
  state = {
    goalInfo: null, // eslint-disable-line
  }

  componentDidMount() {
    const {
      getGoalById,
      goal,
      goalId,
    } = this.props
    // if goal exists already on state, update localstate
    if (goal) {
      this.setState(() => ({goalInfo: this.props.goal}))// eslint-disable-line
    } else {
      // i request the goal info from server
      getGoalById(goalId)
    }
  }

  render() {
    // goalinfo from localstate
    const {
      goalInfo,
    } = this.state

    // goal info after returned from server request
    const {
      goal,
    } = this.props


    // if none has the goal data, i show a message to the user
    if (!goalInfo && !goal) {
      return (
        <p>
          Sorry, this item either not exist or does not support refresh (f5).
          Please go back, on the list, and chose a card again,
          <Link to="/">
            to the card list.
          </Link>
        </p>
      )
    }

    // if goal data exists on one of 'goalInfo' or 'goal', i display on screen
    return (
      <div>
        <GoalCard
          detailsStyle
          goal={goalInfo || goal}
          key="001"
        />
      </div>
    )
  }
}

Info.defaultProps = {
  goal: {},
}

Info.propTypes = {
  getGoalById: propTypes.func.isRequired,
  goal: propTypes.shape({
    amount: propTypes.number,
    balance: propTypes.number,
    date: propTypes.string,
    description: propTypes.string,
    id: propTypes.string,
    image_url: propTypes.string,
    name: propTypes.string,
    percentage: propTypes.number,
    status: propTypes.string,
  }),
  goalId: propTypes.string.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  const goalId = ownProps.match.params.id

  return {
    goal: selectors.getGoalById(goalId, state),
    goalId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGoalById: (id) => {
      dispatch(actions.fetchGoalById(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
