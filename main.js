import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App.js'
import ExtraClass from './ExtraClass.js'
import StateClass from './StateClass.js'
import ReactComponent from './ReactComponent.js'
import LifeCycle from './LifeCycle.js'
import ReactForm from './ReactForm.js'
import ReactEvent from './ReactEvent.js'
import ConditionalRendering from './ConditionalRendering.js'
import ReactKeys from './ReactKeys.js'
import ReactRef from './ReactRef.js'
const routing = (
  <Router>
    <>
      <Route path='/' exact component={App} />
      <Route path='/extra-class' component={ExtraClass} />
      <Route path='/state-class' component={StateClass} />
      <Route path='/react-component' component={ReactComponent} />
      <Route path='/react-life-cycle' component={LifeCycle} />
      <Route path='/react-form' component={ReactForm} />
      <Route path='/react-event' component={ReactEvent} />
      <Route path='/react-conditional-rendering' component={ConditionalRendering} />
      <Route path='/react-key' component={ReactKeys} />
      <Route path='/react-ref' component={ReactRef} />
    </>
  </Router>
)
ReactDOM.render(routing, document.getElementById('app'))
