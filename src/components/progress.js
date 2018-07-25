import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import './progress.scss'

export const Progress = ({ percentage }) => {
  const styles = classnames(
    'progress',
    { completed: percentage === 100 },
  )

  return (
    <div className={styles} style={{ width: `${percentage}%` }} />
  )
}

Progress.propTypes = {
  percentage: propTypes.number.isRequired,
}
