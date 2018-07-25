import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import queryString from 'query-string'
import moment from 'moment'

import Icon from '@material-ui/core/Icon'

import { fetchGoals } from './actionCreators/home.actionCreators'
import * as selectors from './selectors/home.selectors'
import { Progress } from '../../components/progress'

import noImageAvailable from '../../assets/img/No_Image_Available.jpg'
import { CustomButton } from '../../components/customButton'

import './home.scss'

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
    let img
    let percentage
    if (goals && goals.length > 0) {
      goalsDOM = goals.map((goal, idx) => {
        let goalReleaseDate = moment(goal.date) // eslint-disable-line prefer-const
        img = !goal.image_url ? noImageAvailable : goal.image_url
        percentage = parseFloat(goal.percentage) * 100
        return (
          <div className="goalBlock" key={idx}>
            <div className="goalBlock-img">
              <div className="goalBlock-name">
                {goal.name}
              </div>
              <img alt={goal.name} src={img} />
            </div>
            <div className="goalBlock-body">
              <div className="goalBlock-button">
                <CustomButton
                  completed={percentage === 100}
                  link="/"
                />
              </div>
              <div className="wrap-goalBlock-top">
                <div>
                  <p className="goalBlock-balance">
                    {goal.balance}
                  </p>
                </div>
              </div>
              <div>
                <Progress
                  percentage={percentage}
                />
              </div>
              <p className="goalBlock-balance amount">
                {goal.amount}
              </p>
              <p className="view-more">
                <p className="goalBlock-date">
                  {goal.date && `By ${goalReleaseDate.format('Do MMM YYYY')}`}
                  {!goal.date
                    && (
                    <Icon>
                      report_off
                    </Icon>
                    )}
                </p>
              </p>
            </div>
          </div>)
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
