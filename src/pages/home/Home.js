import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import queryString from 'query-string'

import { fetchGoals } from './actionCreators/home.actionCreators'

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

  render() {
    return (
      <div>
        Home page
      </div>
    )
  }
}


Home.propTypes = {
  getGoals: propTypes.func.isRequired,
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

export default connect(null, mapDispatchToProps)(Home)
