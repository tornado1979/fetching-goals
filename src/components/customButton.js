import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

import './customButton.scss'

export const CustomButton = ({ completed, small, text }) => {
  const style = classnames(
    'customButton',
    { completed },
    { small },
  )
  return (
    <button className={style} type="button">
      {text}
    </button>
  )
}

CustomButton.propTypes = {
  // i named it 'completed' because takes the same color as the progress bar
  completed: propTypes.bool.isRequired,
  small: propTypes.bool.isRequired, // when it comes from Home is true
  text: propTypes.string.isRequired,
}
