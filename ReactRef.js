import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

var myStyle = {
  fontSize: 80,
  fontFamily: 'Courier',
  color: '#483D8B',
  textAlign: 'center'
}
class ReactRef extends Component {
  constructor (props) {
    super(props)
    this.callRef = React.createRef()
    this.callRefComponent = null
    this.setInputRef = element => {
      this.callRefComponent = element
    }
    this.addRefInput = this.addRefInput.bind(this)

    this.focusRefInput = () => {
      if (this.callRefComponent) {
        this.callRefComponent.focus()
      }
    }
  }

  componentDidMount () {
    this.focusRefInput()
  }

  addRefInput () {
    this.callRef.current.focus()
  }

  render () {
    return (
      <div>
        <NavLink style={myStyle} to='/'>Back</NavLink>
        <br />
        <h3 style={myStyle}>React Ref to DOM element</h3>
        <input type='text' ref={this.callRef} />
        <input type='text' ref={this.setInputRef} />
        <input type='button' value='Add Text Input' onClick={this.addRefInput} />
        <input type='button' value='Focus' onClick={this.focusRefInput} />
      </div>
    )
  }
}

export default ReactRef
