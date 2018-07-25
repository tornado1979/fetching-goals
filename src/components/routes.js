import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import Home from '../pages/home/Home'
import Info from '../pages/info/Info'
import NotFound from '../pages/notfound/notfound'

export const Routes = () => {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Info} exact path="/goal/:id" />
      <Route component={NotFound} />
    </Switch>
  )
}
