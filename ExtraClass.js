import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

var myStyle = {
  fontSize: 80,
  fontFamily: 'Courier',
  color: '#483D8B',
  textAlign: 'center'
}
class ExtraClass extends Component {
  render () {
    return (
      <div>
        <First />
        <Second />
      </div>
    )
  }
}
class First extends Component {
  render () {
    return (
      <div>
        <NavLink style={myStyle} to='/'>Back</NavLink>
        <br />
        <h4 style={myStyle}>Class First Component </h4>
      </div>
    )
  }
}
class Second extends Component {
  render () {
    return (
      <div>
        <h4 style={myStyle}>Class Second Component </h4>
      </div>
    )
  }
}

export default ExtraClass
