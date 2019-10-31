import React, { Component } from 'react'
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
    this.addRefInput = this.addRefInput.bind(this)
  }

  addRefInput () {
    this.callRef.current.focus()
  }

  render () {
    return (
      <div>
        <h3>React Ref to DOM element</h3>
        <input type='text' style={myStyle} ref={this.callRef} />
        <input type='text' style={myStyle} ref={this.callRef} />
        <input type='button' value='Add Text Input' onClick={this.addRefInput} />
      </div>
    )
  }
}

export default ReactRef
