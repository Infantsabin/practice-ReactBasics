import React, { Component } from 'react'

var myStyle = {
  fontSize: 80,
  fontFamily: 'Courier',
  color: '#483D8B',
  textAlign: 'center'
}

class ReactForm extends Component {
  constructor (props) {
    super(props)
    this.formSubmit = this.formSubmit.bind(this)
    this.input = React.createRef()
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    console.log(event.target.value)
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    alert('Your input is ' + this.state.value)
    event.preventDefault()
  }

  formSubmit (e) {
    alert('You updated your Name and Company name')
    console.log(e)
    e.preventDefault()
  }

  render () {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <h1 style={myStyle}>Uncontrolled React Form</h1>
          <label>Employee Name : </label>
          <input type='text' ref={this.input} />
          <br />
          <label>Company Name : </label>
          <input type='text' ref={this.input} />
          <br />
          <input type='submit' value='submit' />
        </form>
        <form onSubmit={this.handleSubmit}>
          <h1 style={myStyle}>Controlled React Form</h1>
          <label>Name : </label>
          <input type='text' value={this.state.value} onChange={this.handleChange} />
          <br />
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default ReactForm
