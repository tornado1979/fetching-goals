import React from 'react'
import propTypes from 'prop-types'
import moment from 'moment'
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import { Progress } from './progress'
import noImageAvailable from '../assets/img/No_Image_Available.jpg'
import { CustomButton } from './customButton'

export const GoalCard = ({
  goal,
  detailsStyle,
}) => {
  const goalReleaseDate = moment(goal.date)
  const img = !goal.image_url ? noImageAvailable : goal.image_url
  const percentage = parseFloat(goal.percentage) * 100
  const to = `/goal/${goal.id}`
  const comesFromDetailsPage = detailsStyle // if it comes from details page
  const completed = goal.status === 'COMPLETED'

  const IconStyle = {
    fontSize: '15px',
  }

  const bodyStyle = classnames(
    'goalBlock-body',
    { details: detailsStyle },
  )
  return (
    <div className="goalBlock">
      <div className="goalBlock-img">
        {!comesFromDetailsPage && (
          <div className="goalBlock-name">
            {goal.name}
          </div>
        )}
        <img alt={goal.name} src={img} />
      </div>
      {comesFromDetailsPage && (
      <div className={bodyStyle}>
        <div>
          <Progress
            percentage={percentage}
          />
        </div>
        {completed
          && (
          <div className="goalBlock-button">
            <Link to={to}>
              <CustomButton
                completed={completed}
                link="/"
                small={false}
                text="Release Funds"
              />
            </Link>
          </div>
          )}
        <div className="wrap-goalBlock-top">
          <div>
            <p className="goalBlock-title">
              {goal.name}
            </p>
            <p className="goalBlock-description">
              {goal.description}
            </p>
          </div>
          <div>
            <p className="goalBlock-balance">
              {goal.balance}
            </p>
            <p className="goalBlock-balance amount">
              {goal.amount}
            </p>
          </div>
        </div>
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
      )}
      {!comesFromDetailsPage && (
      <div className={bodyStyle}>
        <div className="goalBlock-button">
          <Link to={to}>
            <CustomButton
              completed={completed}
              small
              text="..."
            />
          </Link>
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
              <Icon style={IconStyle}>
                report_off
              </Icon>
              )}
          </p>
        </div>
      </div>
      )}
    </div>
  )
}

GoalCard.propTypes = {
  detailsStyle: propTypes.bool,
  goal: propTypes.shape({
    amount: propTypes.number,
    balance: propTypes.number,
    date: propTypes.string,
    name: propTypes.string,
    percentage: propTypes.number,
  }).isRequired,
}

GoalCard.defaultProps = {
  detailsStyle: false, // it come false from 'Home' and true from 'Info' pages
}
