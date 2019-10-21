import React, { Component } from 'react'

var myStyle = {
  fontSize: 80,
  fontFamily: 'Courier',
  color: '#483D8B',
  textAlign: 'center'
}
class StateClass extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [{ name: 'Sabin' }, { name: 'Abi' }, { name: 'Zavith' }],
      displayBio: false,
      name: 'Sabin',
      cons: 'www.google.com'
    }
    this.handleEvent = this.handleEvent.bind(this)
    console.log('Component This:', this)
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this)
  }

  // arrowFun = () => {
  //   console.log(this.props)
  // }

  handleEvent () {
    console.log(this.props)
  }

  toggleDisplayBio () {
    this.setState({ displayBio: !this.state.displayBio })
  }

  render () {
    const bio = this.state.displayBio ? (
      <div>
        <h5 style={myStyle}>Show Less</h5>
        <button style={myStyle} onClick={this.toggleDisplayBio}> Show Less </button>
      </div>
    ) : (
      <div>
        <h5 style={myStyle}>Read More</h5>
        <button style={myStyle} onClick={this.toggleDisplayBio}> Read More </button>
      </div>
    )
    return (
      <div>
        <Name nameProp={this.state.name} />
        <ul>
          {this.state.data.map((item, key) =>
            <List data={item} key={key} />
          )}
        </ul>
        {bio}
        <input type='text' defaultValue={this.state.cons} />
        <button onClick={this.handleEvent}>constructor button</button>
      </div>
    )
  }
}
class Name extends Component {
  render () {
    return (
      <div>
        <h4 style={myStyle}>Name List from {this.props.nameProp}</h4>
      </div>
    )
  }
}
class List extends Component {
  render () {
    return (
      <div>
        <ul>
          <li style={myStyle}>{this.props.data.name}</li>
        </ul>
      </div>
    )
  }
}

export default StateClass
