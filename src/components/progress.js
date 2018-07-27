import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import './progress.scss'

export const Progress = ({ percentage, height }) => {
  const styles = classnames(
    'progress',
    { completed: percentage === 100 },
  )

  return (
    <div className={styles} style={{ width: `${percentage}%`, height: `${height}px` }} />
  )
}

Progress.propTypes = {
  height: propTypes.number.isRequired,
  percentage: propTypes.number.isRequired,
}
