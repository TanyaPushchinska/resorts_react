import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Resorts from './Resorts/Resorts'
import Resort from './Resort/Resort'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Resorts}/>
      <Route exact path="/resorts/:slug" component={Resort}/>
    </Switch>
  )
}

export default App
