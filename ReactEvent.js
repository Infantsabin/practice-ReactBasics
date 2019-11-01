import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

var myStyle = {
  fontSize: 80,
  fontFamily: 'Courier',
  color: '#483D8B',
  textAlign: 'center'
}

class ReactEvent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleEvent (event) {
    this.setState({ text: event.target.value })
  }

  render () {
    return (
      <div>
        <NavLink style={myStyle} to='/'>Back</NavLink>
        <br />
        <h1 style={myStyle}>React Event</h1>
        <label>Input</label>
        <input type='text' id='text' onChange={this.handleEvent.bind(this)} />
        <h3>You have Entered: {this.state.text}</h3>
      </div>
    )
  }
}
export default ReactEvent
