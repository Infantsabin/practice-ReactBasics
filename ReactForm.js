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
  }

  formSubmit (e) {
    alert('You updated your Name and Company name')
    console.log(e)
    e.preventDefault()
  }

  render () {
    return (
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
    )
  }
}

export default ReactForm
