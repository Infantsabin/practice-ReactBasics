import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

var myStyle = {
  fontSize: 80,
  fontFamily: 'Courier',
  color: '#483D8B',
  textAlign: 'center'
}

class LifeCycle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Before Change'
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState () {
    this.setState({ name: 'After Change' })
  }

  componentWillMount () {
    console.log('Component in Will Mount')
  }

  componentDidMount () {
    console.log('Component in Did Mount')
  }

  componentWillReceiveProps (newProps) {
    console.log('Component will receeive props')
  }

  shouldComponentUpdate (newProps, newState) {
    return true
  }

  componentWillUpdate (newProps, newState) {
    console.log('Component Will update', newProps, newState)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('Component Did update', prevProps, prevState)
  }

  componentWillUnmount () {
    console.log('Component will Unmount')
  }

  render () {
    return (
      <div>
        <NavLink style={myStyle} to='/'>Back</NavLink>
        <br />
        <h3 style={myStyle}>React LifeCycle</h3>
        <h2>{this.state.name}</h2>
        <button onClick={this.changeState}>Click Here</button>
      </div>
    )
  }
}

export default LifeCycle
