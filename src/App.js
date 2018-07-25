import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg'
import './App.scss'

import { Routes } from './components/routes'

class App extends Component {
  render() {
    return (
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
    )
  }
}

export default App
