import React from 'react'
import propTypes from 'prop-types'
import moment from 'moment'
import Icon from '@material-ui/core/Icon'

import { Progress } from './progress'
import noImageAvailable from '../assets/img/No_Image_Available.jpg'
import { CustomButton } from './customButton'

export const GoalCard = ({ goal, idx }) => {
  const goalReleaseDate = moment(goal.date)
  const img = !goal.image_url ? noImageAvailable : goal.image_url
  const percentage = parseFloat(goal.percentage) * 100

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
        <div className="view-more">
          <p className="goalBlock-date">
            {goal.date && `By ${goalReleaseDate.format('Do MMM YYYY')}`}
            {!goal.date
              && (
              <Icon>
                report_off
              </Icon>
              )}
          </p>
        </div>
      </div>
    </div>
  )
}

GoalCard.propTypes = {
  goal: propTypes.shape({
    amount: propTypes.number,
    balance: propTypes.number,
    date: propTypes.string,
    name: propTypes.string,
    percentage: propTypes.number,
  }).isRequired,
  idx: propTypes.number.isRequired,
}
