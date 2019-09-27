import React, { Component } from 'react'
import ExtraClass from './ExtraClass.js'
import StateClass from './StateClass.js'

class App extends Component {
  render () {
    var myStyle = {
      fontSize: 80,
      fontFamily: 'Courier',
      color: '#003300',
      textAlign: 'center'
    }
    function Welcome (props) {
      return <h4 style={myStyle}>{props.name}</h4>
    }
    return (
      <div>
        <h1 style={myStyle}>Hello {this.props.name}!</h1>
        <Welcome name='Function Component' />
        <ExtraClass />
        <StateClass />
      </div>
    )
  }
}

App.defaultProps = {
  name: 'Infant'
}

export default App
