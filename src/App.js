import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import logo from './logo.svg'
import './App.scss'

import { Routes } from './components/routes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img alt="logo" className="App-logo" src={logo} />
            <h1 className="App-title">
              React/redux app that fetches data from express server
            </h1>
          </header>
          <Router>
            <Routes />
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
