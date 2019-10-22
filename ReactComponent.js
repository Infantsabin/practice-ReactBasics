import React, { Component } from 'react'
import ReactDOM from 'react-dom'

var myStyle = {
  fontSize: 80,
  fontFamily: 'Courier',
  color: '#483D8B',
  textAlign: 'center'
}

class ReactComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fName: 'Sabin'
    }
    this.setStateEvent = this.setStateEvent.bind(this)
    this.forceUpdateEvent = this.forceUpdateEvent.bind(this)
    this.findDOMNodeEvent1 = this.findDOMNodeEvent1.bind(this)
    this.findDOMNodeEvent2 = this.findDOMNodeEvent2.bind(this)
  }

  setStateEvent () {
    this.setState({ fName: 'Shabin' })
  }

  forceUpdateEvent () {
    this.forceUpdate()
  }

  findDOMNodeEvent1 () {
    var myDiv = document.getElementById('div1')
    ReactDOM.findDOMNode(myDiv).style.color = 'red'
  }

  findDOMNodeEvent2 () {
    var myDiv = document.getElementById('div2')
    ReactDOM.findDOMNode(myDiv).style.color = 'blue'
  }

  render () {
    return (
      <div>
        <input type='text' value={this.state.fName} />
        <button onClick={this.setStateEvent}>SetState Component</button>
        <br />
        <p>Random Number: {Math.random()}</p>
        <button onClick={this.forceUpdateEvent}>ForceUpdate Component</button>
        <br />
        <h3 style={myStyle}>ReactDOM Component</h3>
        <button onClick={this.findDOMNodeEvent1}>findDOMNodeEvent1</button>
        <button onClick={this.findDOMNodeEvent2}>findDOMNodeEvent2</button>
        <h4 id='div1'style={myStyle}>Event 1</h4>
        <h4 id='div2'style={myStyle}>Event 2</h4>
      </div>
    )
  }
}

export default ReactComponent
