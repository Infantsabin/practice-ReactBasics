import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

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
    this.input1 = React.createRef()
    this.input2 = React.createRef()
    this.state = {
      value: '',
      personGoing: false,
      numberOfPerson: 5
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleMultipleInputChange = this.handleMultipleInputChange.bind(this)
  }

  handleMultipleInputChange (event) {
    var target = event.target
    var value = target.type === 'checkbox' ? target.checked : target.value
    var name = target.name
    this.setState({
      [name]: value
    })
    console.log([name])
  }

  componentDidMount () {
    this.input3.value = 'asdad'
  }

  componentWillUpdate (newProps, newState) {
    console.log('Component Will update', newProps, newState)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('Component Did update', prevProps, prevState)
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
    console.log(this.input1.current.value, this.input2.current.value)
    alert('You updated your Name and Company name')
    console.log(e)
    e.preventDefault()
  }

  render () {
    console.log(this.input3)
    return (
      <div>
        <NavLink style={myStyle} to='/'>Back</NavLink>
        <br />
        <form onSubmit={this.formSubmit}>
          <h1 style={myStyle}>Uncontrolled React Form</h1>
          <label>Employee Name : </label>
          <input type='text' ref={this.input1} />
          <br />
          <label>Company Name : </label>
          <input type='text' ref={this.input2} />
          <input type='text' ref={comp => {
            this.input3 = comp
          }} />
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
        <form>
          <h1 style={myStyle}>Controlled React Form with multiple</h1>
          <label>Is person going </label>
          <input type='checkbox' name='personGoing' checked={this.state.personGoing} onChange={this.handleMultipleInputChange} />
          <br />
          <label>Number of persons </label>
          <input type='number' value={this.state.numberOfPerson} onChange={this.handleMultipleInputChange} />
        </form>
      </div>
    )
  }
}

export default ReactForm
