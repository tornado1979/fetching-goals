import React, { Component, Fragment } from 'react'
import {
  NavLink,
} from 'react-router-dom'

import notFoundimg from '../../assets/img/notFound/Page-not-found.png'

class NotFound extends Component {
  constructor(props) {
    super(props)

    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput() {
    this.textInput.current.focus()
  }

  render() {
    const notFound = (
      <table>
        <tbody>
          <tr>
            <td>
              <h2>
                Ooops!!
              </h2>
            </td>
            <td rowSpan="2">
              <img alt="page not found" src={notFoundimg} />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <ul>
                  <li>
                    <p>
                      We cant find the page you are looking for.
                    </p>
                  </li>
                  <li>
                    <p>
                      Error code: 404.
                    </p>
                  </li>
                  <li>
                    <p>
                      Return to the
                      <NavLink to="/">
                        homepage
                      </NavLink>
                    </p>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    )

    return (
      <Fragment>
        { notFound }
      </Fragment>
    )
  }
}

export default NotFound
