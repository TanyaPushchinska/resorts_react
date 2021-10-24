import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { createStore } from "redux";
import Resorts from './Resorts/Resorts'
import Resort from './Resort/Resort'
import ResortForm from "./Resorts/ResortForm";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Resorts}/>
      <Route exact path="/resorts/:slug" component={Resort}/>
      <Route exact path="/resorts" component={ResortForm}/>
    </Switch>
  )
}

export default App
