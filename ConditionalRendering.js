import React, { Component } from 'react'
var myStyle = {
  fontSize: 80,
  fontFamily: 'Courier',
  color: '#483D8B',
  textAlign: 'center'
}

function Message (props) {
  if (props.isLoggedIn) { return <h1>Welcome Back!</h1> } else { return <h2>Please Login!</h2> }
}

function Login (props) {
  return (
    <button onClick={props.clickInfo}>Login</button>
  )
}

function Logout (props) {
  return (
    <button onClick={props.clickInfo}>Logout</button>
  )
}

class ConditionalRendering extends Component {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.state = {
      isLoggedIn: false
    }
  }

  handleLogin () {
    this.setState({ isLoggedIn: true })
  }

  handleLogout () {
    this.setState({ isLoggedIn: false })
  }

  render () {
    return (
      <div>
        <a style={myStyle} href='/'>Back</a>
        <br />
        <h1 style={myStyle}>Conditional Rendering</h1>
        <Message isLoggedIn={this.state.isLoggedIn} />
        {
          (this.state.isLoggedIn) ? (
            <Logout clickInfo={this.handleLogout} />
          ) : (
            <Login clickInfo={this.handleLogin} />
          )
        }
      </div>
    )
  }
}
export default ConditionalRendering
