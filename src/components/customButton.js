import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import './customButton.scss'

export const CustomButton = ({ completed, link }) => {
  console.log(completed, link)
  const style = classnames(
    'customButton',
    { completed },
  )
  return (
    <button className={style} type="button">
      ...
    </button>
  )
}

CustomButton.propTypes = {
  // i named it 'completed' because takes the same color as the progress bar
  completed: propTypes.bool.isRequired,
  link: propTypes.string.isRequired,
}
